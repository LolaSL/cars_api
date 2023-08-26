import { NextApiRequest, NextApiResponse } from 'next';
import { NewsResponse } from '@types';

export default async function fetchNews(_: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('YOUR_API_URL'); // Replace with the actual API URL
    const data: NewsResponse = await response.json();

    if (response.ok) {
      res.status(200).json(data.articles);
    } else {
      res.status(response.status).json({ error: 'Failed to fetch news' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
