
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
  const [data, setData] = useState();
  const apiKey = "640e78c8d6d7466faf6e27fcfe8102ec";
  const type = "cars";
  const date = "2022-12-01";
  const sortBy = "publishedAt";
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;
  
  const GetNews = () => {
    axios.get(url)
      .then((response) => {
        console.clear();
        setData(response.data)
        console.log(response.data)
      }).catch(error => {
      console.log(error)
    })
  }
  
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

