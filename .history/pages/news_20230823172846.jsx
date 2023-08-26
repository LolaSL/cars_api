import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { CustomButton } from "@components";
import {globals} from "../app/styles/globals.css"

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
<div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
      <CustomButton
          btnType="button"
          title="Get News"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={GetNews}
        />
    
      {data &&
        data.articles.map((d, index) => {
          return (
            <div key={index} className="mt-6">
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
                  className="pl-3 mt-6 text-teal-800 text-[18px] leading-[38px] font-extrabold"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default NewsPage;
