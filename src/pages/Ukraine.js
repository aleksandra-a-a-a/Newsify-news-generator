import { useState, useEffect } from "react";
import News from "../components/News";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Ukraine = () => {
  const [allNews, setAllNews] = useState([]);
  const view = useSelector((state) => state.view);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ua&apiKey=6292b2daff4b4f4fac66d86a18e86d90"
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
  height: 10vh;
  margin-top: 2rem;

  h1 {
    @media (max-width: 414px) {
     font-size: 1.2rem;
     } 
`;

  const articleCount = allNews.length;

  return (
    <>
    <PageTitle>
      <h1>
        <span className="fi fi-ua"></span> Україна - головні новини
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

export default Ukraine;
