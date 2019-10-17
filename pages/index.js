import React from 'react';
import Aside from '../components/Aside';
import Head from '../components/layout/head';
import ArticlesList from '../components/ArticlesList';
import withPage from '../components/layout/page';

const Home = () => {
  return (<div>
      <Head title="Home" />
      <Aside />
      <ArticlesList />
    </div>
  )
}

export default withPage(Home)
