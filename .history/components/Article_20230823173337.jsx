import React from 'react'

function Article({ article }) {
    return (
      <div key={article.publishedAt} className="mt-6">
        <div>{article.author}</div>
        <div>{article.description}</div>
        <div>{article.publishedAt}</div>
        <div>{article.title}</div>
        <div>
          <Link
            href={`${article.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-3 mt-6 text-teal-800 text-[16px] leading-[38px] font-extrabold"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }
export default Article;
  