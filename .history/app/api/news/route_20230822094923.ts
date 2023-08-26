
// const apiKey = process.env.NEWS_API_KEY;
// const query = 'cars';

// async function fetchBitcoinNews() {
//   try {
//     const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
//     const data = await response.json();

//     if (response.ok) {
//       return data;
//     } else {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     throw error;
//   }
// }

// // Example usage:
// fetchBitcoinNews()
//   .then(newsData => {
//     console.log('Cars news data:', newsData);

//   })
//   .catch(error => {
//     console.error('Error fetching Cars news:', error);
//   });
import { NextApiRequest, NextApiResponse } from 'next';

const apiKey = process.env.NEWS_API_KEY;
const query = 'cars';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching news' });
  }
}
