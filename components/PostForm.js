import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";
import Head from "./layout/head";
import withPage from "./layout/page";
import { withAuthentication } from "./Session";
import debounce from '../helper/debounce';

const PostForm = (props) => {
  const { id, firebase, currentUser, mode } = props;
  const [post, setPost] = useState({
    title: "",
    tags: "",
    stage: "draft",
    createdAt: new Date().getTime(),
    content: editorStateFromRaw(null),
    author: currentUser && currentUser.uid
  });

  const debouncePost = debounce(post, 6789);

  const onChange = name => e => {
    setPost({ ...post, [name]: e.target ? e.target.value : e });
  };

  const onPublish = () => {
    setPost({ ...post, stage: post.status === 'draft' ? 'published' : 'draft' });
  };

  useEffect(() => {
    if (props.post) {
      const preStatePost = { ...post, ...props.post };
      const strContent = (props.post.content || null);
      preStatePost.content = editorStateFromRaw(JSON.parse(strContent));
      setPost(preStatePost);
    }
  }, [props.post]);

  useEffect(() => {
    if (debouncePost && id && debouncePost.title) {
      const data = {...debouncePost, content: editorStateToJSON(debouncePost.content)};
      firebase.setPost(id, data);
    }
  },[debouncePost]);

  return (
    <div className={`create-post pure-form pure-form-stacked ${mode}`}>
      <Head title={post.title || "Create post"} />
      <br />
      <div className="post-title">
        {" "}
        <span className="title-label"> Title &nbsp; </span> <div className="vl" />
        <input
          onChange={onChange("title")}
          className="post-title__text-input"
          type="text"
          value={post.title}
          placeholder="Enter title"
          name="title"
        />
        <div onClick={onPublish} className="publish--btn">
          {" "}
          {post.stage === "published"
            ? "It's Draft?"
            : "Ready to publish?"}{" "}
        </div>
      </div>
      <br />
      <div className="post-tags">
        <input
          onChange={onChange("tags")}
          value={post.tags}
          placeholder="Post tags"
        />
      </div>
      <br />

      <MegadraftEditor
        editorState={post.content}
        onChange={onChange("content")}
      />
      <style jsx global>
        {`
          .vl {
            border-left: 1px solid white;
            height: 50px;
          }
          .create-post.pure-form {
            width: 50%;
            margin: 0 auto;
          }
          .post-title {
            display: flex;
            align-items: center;
          }
          .post-tags {
            padding-left: 43px;
          }
          .post-tags input {
            margin-left: 41px;
            width: 100%;
            color: black;
          }
          .pure-form-stacked .publish--btn {
            height: 25px;
            line-height: 25px;
            cursor: pointer;
            padding: 0 6px;
            border: solid 1px rgb(233, 36, 108);
            border-radius: 3px;
            color: rgb(233, 36, 108);
          }
          .create-post.pure-form .post-title__text-input {
            height: 50px;
            width: calc(100% - 176px);
            background: transparent;
            border-radius: 0;
            border: none;
            font-size: 18px;
            box-shadow: none;
          }
          .megadraft {
            margin-left: 47px;
          }
          .megadraft-editor .DraftEditor-root,
          .megadraft-editor .toolbar {
            color: white;
          }
          .view .title-label, .view .vl, .view .publish--btn, .view .post-tags {
            display: none;
          }
          .view .megadraft {
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  )
}

export default compose(
  withAuthentication,
  withPage
)(PostForm)
