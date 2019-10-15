import React from 'react';
import Aside from '../components/Aside';
import Head from '../components/layout/head';
import ArticlesList from '../components/ArticlesList';

const Home = () => {

  return (
    <div>
      <Head title="Home" />
      <Aside />
      <ArticlesList />
      <style jsx global>{`
        html, body {
          font-family: open sans,sans-serif;
        }
        body {
          font: 11px menlo;
          background-color: #333;
          color: #fff;
          padding: 0;
          margin: 0;
        }
        a {
          color: rgb(166, 226, 44);
        }
        p {
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

export default Home
