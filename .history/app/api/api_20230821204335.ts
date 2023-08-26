import { NextApiRequest, NextApiResponse } from 'next';
type Article = {
    source: {
      id: string | null;
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
  
  type NewsResponse = {
    status: string;
    totalResults: number;
    articles: Article[];
  };

  const headers: HeadersInit = {
    "X-Api-Key": process.env.NEWS_API_KEY || ""
    
};
  
 
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}&cylinders=${cylinders}`,
    {
      headers: headers,
    }
  );

// export default async function fetchNews(_: NextApiRequest, res: NextApiResponse) {
//   try {
//       const response = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=640e78c8d6d7466faf6e27fcfe8102ec'), {
//           headers:headers
//       };
   
//     const data: NewsResponse = await response.json();

//     if (response.ok) {
//       res.status(200).json(data.articles);
//     } else {
//       res.status(response.status).json({ error: 'Failed to fetch news' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }
