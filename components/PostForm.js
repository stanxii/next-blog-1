import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import {MegadraftEditor, editorStateFromRaw} from "megadraft";
import Head from './layout/head';

import withPage from './layout/page';

// import Swal from 'sweetalert2';
// import { withFirebase } from '../../components/firebase';
import { withAuthorization, withAuthentication } from './Session';

const PostForm = () => {
  const [editorState, setEditorState] = useState(editorStateFromRaw(null));
  const onChange = (newTexts) => {
    setEditorState(newTexts);
  }
  return (
    <div className="create-post pure-form pure-form-stacked">
      <Head title="Create post"/>
      <div className="post-title" > Title <div className="vl"></div>
        <input className="post-title__text-input" type="text" placeholder="Enter title" name="title"  />
      </div>

      <MegadraftEditor
        editorState={editorState}
        onChange={onChange}/>
      <style jsx global>{`
        .vl {
          border-left: 1px solid white;
          height: 50px;
        }
        .create-post.pure-form {
          width: 870px;
          margin: 0 auto;
        }
        .post-title {
          display: flex;
          align-items: center;
        }
        .create-post.pure-form .post-title__text-input {
          height: 50px;
          width: 100%;
          background: transparent;
          border-radius: 0;
          border: none;
          font-size: 18px;
        }
        .megadraft-editor .DraftEditor-root, .megadraft-editor .toolbar {
          color: white;
        }
      `}
      </style>
    </div>
  )
}

const isLoggedIn = user => !!user;
export default compose(
	withAuthentication,
	withAuthorization(isLoggedIn),
  withPage,
)(PostForm);