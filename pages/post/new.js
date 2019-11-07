import React from 'react';
import nanoid from 'nanoid';
import { compose } from 'recompose';

import PostForm from '../../components/PostForm';
import { withAuthentication, withAuthorization } from '../../components/Session';
import withPage from '../../components/layout/page';

const Post = ({ firebase }) => {
  const pid = nanoid(10);
  const { currentUser = {} } = firebase.auth;
  return <PostForm id={pid} firebase={firebase} currentUser={currentUser} />;
};
const isLoggedIn = user => !!user;

export default compose(
  withAuthentication,
	withAuthorization(isLoggedIn),
  withPage,
)(Post);
