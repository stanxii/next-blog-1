import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { useRouter } from 'next/router';

import PostForm from '../../components/PostForm';
import PostView from '../../components/PostView';

import withPage from '../../components/layout/page';
import { withAuthentication } from '../../components/Session';

const Post = (props) => {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [mode, setMode] = useState('');
  const { id } = router.query;
  const { firebase } = props;
  useEffect(() => {
    firebase.getPostDetail(id, setPost);
  }, [id]);

  useEffect(() => {
    if (firebase.auth.currentUser && post && post.author === firebase.auth.currentUser.uid){
      setMode('edit');
    } else {
      setMode('view');
    }
  },[post]);
  if (!mode || !post) return '';
  return mode === 'edit' ? <PostForm post={post} id={id} firebase={firebase} /> : <PostView post={post} />;
}
export default compose(
	withAuthentication,
  withPage,
)(Post);
