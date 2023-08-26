import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

import axios from "axios";
// import { CustomButton } from '@components';

// type Article = {
//   source: {
//     name: string;
//   };
//   author: string;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
//   publishedAt: string;
//   content: string;
// };

function NewsPage() {
  const [data, setData] = useState();
  const apiKey = "640e78c8d6d7466faf6e27fcfe8102ec";
  const type = "cars";
  const date = "2022-12-01";
  const sortBy = "publishedAt";
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;
  `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=640e78c8d6d7466faf6e27fcfe8102ec
  const GetNews = () => {
    axios
      .get(url)
      .then((response) => {
        console.clear();
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  <button title={"Get News"} onClick={() => GetNews()}></button>;
  {
    data &&
      data.articles.map((d, index) => {
        return (
          <div key={index}>
            <div>{d.author}</div>
            <div>{d.title}</div>
          </div>
        );
      });
  }
}

export default NewsPage;
