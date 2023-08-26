

import { useEffect, useState } from 'react';

type Article = {
  source: {
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('api/news', {
          method: "GET",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-type": "application/json",
          },
       body: JSON.parse(respo)
        });
        
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
    
        const articlesData: Article[] = await response.json();
    
        if (Array.isArray(articlesData)) {
          setArticles(articlesData);
        } else {
          console.error('Received unexpected data format:', articlesData);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
    

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
          <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt="Article Thumbnail" />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPage;
