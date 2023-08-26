import { useState } from "react";
import Link from "next/link";
import axios from "axios";
// import Image from "next/image";

function NewsPage() {
  const [data, setData] = useState();
  // const apiKey = "640e78c8d6d7466faf6e27fcfe8102ec";
  // const type = "cars";
  // const date = "2022-12-01";
  // const sortBy = "publishedAt";
  const url = `https://newsapi.org/v2/everything?domains=caranddriver.com&apiKey=640e78c8d6d7466faf6e27fcfe8102ec`;

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
  return (
    <div>
      <h1>News</h1>
      <button title={"Get News"} onClick={() => GetNews()}></button>
      {data &&
        data.articles.map((d, index) => {
          return (
            <div key={index}>
              <div>{d.author}</div>
              <div>{d.content}</div>
              <div>{d.description}</div>
              <div>{d.publishedAt}</div>
              <div>{d.title}</div>
              <div>
                {" "}
                {/* <Link
                  href={`/news/${d.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-3"
                >
                  Article
                </Link> */}
                <Link
                  href={`/news/${d.url}`}
               
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-3"
                >
                  Article
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default NewsPage;
