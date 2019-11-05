import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import Aside from '../components/Aside';
import Head from '../components/layout/head';
import ArticlesList from '../components/ArticlesList';
import withPage from '../components/layout/page';

import { withFirebase } from '../components/firebase';

const Home = ({ firebase }) => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    firebase.getPosts(setPosts);
  }, []);
  return (<div>
      <Head title="Home" />
      <Aside />
      <ArticlesList posts={posts} />
    </div>
  )
}

export default compose(withPage, withFirebase)(Home)
