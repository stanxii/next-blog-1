import React, { useState, useEffect } from 'react';
import PostForm from '../../components/PostForm';
import { useRouter } from 'next/router';

import { compose } from 'recompose';
import { withAuthentication } from '../../components/Session';
import withPage from '../../components/layout/page';

const Post = (props) => {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [mode, setMode] = useState('view');
  const { id } = router.query;
  const { firebase } = props;
  useEffect(() => {
    firebase.getPostDetail(id, setPost);
  }, [id]);
  useEffect(() => {
    if (firebase.auth.currentUser && post && post.author === firebase.auth.currentUser.uid){
      setMode('edit');
    }
  },[post]);

  return <PostForm post={post} mode={mode} firebase={firebase} />;
}
export default compose(
	withAuthentication,
  withPage,
)(Post);
