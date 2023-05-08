import { useState, useEffect } from "react";
import News from "../components/News";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from "../components/Footer";

const Entertainment = () => {
  const [allNews, setAllNews] = useState([]);
  const view = useSelector((state) => state.view);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=entertainment&language=en&pageSize=50&apiKey=6292b2daff4b4f4fac66d86a18e86d90"
    )
      .then((res) => res.json())
      .then((data) => setAllNews(data.articles));
  }, []);

  const NewsBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  `;

  const PageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

  h1 {
   @media (max-width: 414px) {
    font-size: 1.2rem;
    } 
  }
    
  `;

  const articleCount = allNews.length;

  return (
    <>
      <PageTitle>
        <h1>
        🎬 Top Entertainment News
        </h1>
      </PageTitle>
      <NewsBox>
        {allNews.map((article) => (
          <News key={article.url} {...article} view={view} />
        ))}
      </NewsBox>
      <Footer articleCount={articleCount} />
    </>
  );
};

export default Entertainment;
