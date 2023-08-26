
import { useState } from 'react';

import axios from 'axios';
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
      <button title={'Get News'}
      onClick={()=> GetNews()}
      ></button>
      {data && data.map((d, index) => {
        return (
          
        )
      })}
    </div>
  );
}

export default NewsPage;

