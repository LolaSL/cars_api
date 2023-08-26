import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { CustomButton } from "@components";
import {globals} from "../app/styles/globals.css"

// function NewsPage() {
//   const [data, setData] = useState();
//   const url = `https://newsapi.org/v2/everything?domains=caranddriver.com&apiKey=640e78c8d6d7466faf6e27fcfe8102ec`;

//   const GetNews = () => {
//     axios
//       .get(url)
//       .then((response) => {
//         console.clear();
//         setData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
// <div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
//       <CustomButton
//           btnType="button"
//           title="Get News"
//           containerStyles="bg-primary-blue rounded-full text-white"
//           handleClick={GetNews}
//         />
    
//       {data &&
//         data.articles.map((d, index) => {
//           return (
//             <div key={index} className="mt-6">
//               <div>{d.author}</div>
//               <div>{d.description}</div>
//               <div>{d.publishedAt}</div>
//               <div>{d.title}</div>
//               <div>
//                 {" "}
//                 <Link
//                   href={`${d.url}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-3 mt-6 text-teal-800 text-[16px] leading-[38px] font-extrabold"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default NewsPage;
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { CustomButton } from "@components";
import { globals } from "../app/styles/globals.css";
function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('api/news', {
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
            <h2>{article.title}</h2>
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article Thumbnail" />
            )}
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