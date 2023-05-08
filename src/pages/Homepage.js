import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import News from "../components/News";
import * as FcIcons from "react-icons/fc";
import Footer from "../components/Footer";


const Homepage = () => {
  const view = useSelector((state) => state.view);

  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?language=en&category=general&pageSize=30&apiKey=6292b2daff4b4f4fac66d86a18e86d90"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data.articles);
        console.log(setAllNews);
      });
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
  `;

  const articleCount = allNews.length;
  return (
    <>
      <PageTitle>
        <h1>
          <FcIcons.FcGlobe /> World - Top News 
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

export default Homepage;
