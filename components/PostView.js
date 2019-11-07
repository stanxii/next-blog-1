import React from "react";
import { compose } from "recompose";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import Head from "./layout/head";
import withPage from "./layout/page";
import { withAuthentication } from "./Session";

const PostView = ({ post = {} }) => {
  const content = editorStateFromRaw(JSON.parse(post.content || null));
  if (!post.content) return '';
  return (
    <div className={`view-post pure-form pure-form-stacked view`}>
      <Head title={post.title || "Post"} />
      <br />
      <div className="post-title">
        <h2>{post.title}</h2>
      </div>
      <br />
      <MegadraftEditor editorState={content} readOnly />
      <div>
        <h3> Tags </h3>
        {
          post.tags && post.tags.split(' ').map((tag) => <span className="view-post-tags" key={tag}> {tag} </span>)
        }
      </div>
      <style jsx global>
        {`
          .view-post {
            width: 50%;
            margin: 0 auto;
          }
          .megadraft {
            max-width: 823px;
            margin-left: 27px;
          }
          .megadraft-editor .DraftEditor-root,
          .megadraft-editor .toolbar {
            color: white;
          }
        `}
      </style>
    </div>
  )
}

export default compose(
  withAuthentication,
  withPage
)(PostView)
