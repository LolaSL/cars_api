import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { CustomButton } from "@components";
import

function NewsPage() {
  const [data, setData] = useState();
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
      <CustomButton
          title="Get News"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
      onClick={() => GetNews()}
        />

      {data &&
        data.articles.map((d, index) => {
          return (
            <div key={index}>
              <div>{d.author}</div>
              <div>{d.description}</div>
              <div>{d.publishedAt}</div>
              <div>{d.title}</div>
              <div>
                {" "}
                <Link
                  href={`${d.url}`}
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
