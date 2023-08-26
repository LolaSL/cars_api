
import { useEffect, useState } from 'react';
import Image from "next/image";
import axios from 'axios';


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

  const apiKey = "";
  const type = "cars";
  const date = "2022-12-01";
  const sortBy = "publishedAt";
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${publishedAt}`;
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/news', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const articlesData: Article[] = await response.json();

        setArticles(articlesData);
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
            <h2>{article?.title}</h2>
            {article?.urlToImage && (
              <Image src={article?.urlToImage} alt="Article Thumbnail" />
            )}
            <p>{article?.description}</p>
            <a href={article?.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPage;

