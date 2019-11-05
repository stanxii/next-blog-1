import React from 'react';
import Link from 'next/link';
import { POST_PATH } from '../constants/routes';

const ArticlesList = ({ posts = {} }) => (<div>
<div className="list-posts">
{
  Object.keys(posts).map(id => (
    <Link href={POST_PATH(id)} key={id} >
      <a className="list-posts__item" >{posts[id].title}</a>
    </Link>
  ))
}
</div>
<style jsx>{`
  .list-posts {
    display: flex;
    flex-flow: column;
  }
  .list-posts__item {
    min-height: 60px;
  }
`}</style>
</div>)

export default ArticlesList;
