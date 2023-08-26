import React from 'react'

function Article({ article }) {
    return (
      <div key={article.publishedAt} className="mt-6">
        <div>{article.author}</div>
        <div>{article.description}</div>
        <div>{article.publishedAt}</div>
        <div>{article.title}</div>
        <div>
          <Link
            href={`${article.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-3 mt-6 text-teal-800 text-[16px] leading-[38px] font-extrabold"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }
  export defaul
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