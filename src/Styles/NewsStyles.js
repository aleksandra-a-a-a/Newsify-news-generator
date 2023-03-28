import styled from "styled-components";

const TileBox = styled.div`
    margin: 2rem 0;
    width: 20rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    background-color: whitesmoke;
    -webkit-box-shadow: 2px 4px 20px -5px rgba(12, 12, 12, 1);
    -moz-box-shadow: 2px 4px 20px -5px rgba(12, 12, 12, 1);
    box- shadow: 2px 4px 20px -5px rgba(12, 12, 12, 1);
    border-radius: 10px;

    .no-image {
      width: 15rem;
      padding: 1rem;
    }
    
    h4 {
      width: 15rem;
      margin-bottom: 1rem;

    
    }

    a {
      font-size: 0.8rem;
      margin-top: 0.7rem;
    }

    .read {
      font-weight: bold;
      cursor: pointer;
      margin-top: 1rem;
    }
  `;

const NewsIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    width: 18rem;
    font-size: 1rem;
  }

  a {
    font-size: 1rem;
  }

  h4 {
    width: 15rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;

    @media (max-width: 414px) {
      margin-bottom: 0.2rem;
      margin-top: 1rem;
      max-width: 15rem;
      flex-wrap: wrap;
    }
  }
`;

const Source = styled.div`
  font-size: 0.7rem;
  margin: 1rem 0;
`;

const ListBox = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  width: 60rem;

  @media (max-width: 414px) {
    max-width: 20rem;
    flex-wrap: wrap;
  }

  .no-image {
    width: 15rem;
    padding: 1rem;
  }
  

  h4 {
    margin-bottom: 1rem;

    @media (max-width: 414px) {
      margin-top: 1rem;
    }
  }

  .no-image {
    -webkit-box-shadow: 2px 4px 20px -5px rgba(12, 12, 12, 1);
    -moz-box-shadow: 2px 4px 20px -5px rgba(12, 12, 12, 1);
    box-shadow: 2px 4px 20px -5px rgba(12, 12, 12, 1);
    padding: 0;
    margin-right: 2rem;
  }

  .read {
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

const ReadMore = styled.div`
  background: #202123;
  width: 35rem;
  height: 40rem;
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  color: whitesmoke;
  border: solid 1px #d5eb2a;
  text-align: center;
  border-radius: 10px;

  @media (max-width: 414px) {
    max-width: 20rem;
  }

  .img-pop {
    width: 20rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 414px) {
      max-width: 17rem;
    }
  }

  .title-pop {
    margin: auto;
    width: 30rem; 
    color: #d5eb2a;

    @media (max-width: 414px) {
      max-width: 18rem;
    }
  }
  }

  .description-pop {
    margin: auto;
    width: 25rem;
    margin-top: 1.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;

    @media (max-width: 414px) {
      max-width: 18rem;
    }
  }

  .source-pop {
    color: #d5eb2a;
  }

  .author-pop {
    color: #d5eb2a;
    padding: 2rem;
   
  }
`;

const CloseIcon = styled.div`
  color: #d5eb2a;
  text-align: right;
  padding: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
`;

export { TileBox, NewsIntro, Source, ListBox, ReadMore, CloseIcon }