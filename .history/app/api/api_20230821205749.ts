"use server"
const apiKey = process.env.NEWS_API_KEY;
const query = 'bitcoin';

async function fetchBitcoinNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

// Example usage:
fetchBitcoinNews()
  .then(newsData => {
    console.log('Bitcoin news data:', newsData);
    // Process the news data here
  })
  .catch(error => {
    console.error('Error fetching Bitcoin news:', error);
  });
