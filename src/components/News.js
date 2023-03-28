import { useState } from "react";
import * as ImIcons from "react-icons/im";
import { TileBox, NewsIntro, Source, ListBox, ReadMore, CloseIcon} from "../Styles/NewsStyles"

export default function News(props) {
  const { title, author, urlToImage, url, publishedAt, view, description } =
    props;

  const [readMore, setReadMore] = useState(false);
  const showPopup = () => setReadMore(true);
  const closePopup = () => setReadMore(false);

  function switchDateFormat() {
    const string = JSON.stringify(publishedAt);
    const newStr = string.replace(/"/g, "");
    const date = new Date(newStr);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = date.toLocaleString("en-US", options);
    const formattedDateString = formattedDate.replace(/,(\s\d+)/, "$1");

    return `Published: ${formattedDateString}`;
  }

  return (
    <>
      {view === "tile" ? (
        <TileBox>
          {readMore ? (
            <ReadMore>
              <CloseIcon>
                <ImIcons.ImCross onClick={closePopup} />
              </CloseIcon>
              <img
                className="img-pop"
                alt=""
                src={
                  urlToImage === null
                    ? process.env.PUBLIC_URL + "/no-image.png"
                    : urlToImage
                }
              />
              <h4 className="title-pop">{title}</h4>
              <p className="description-pop">
                {description ? description : "This article has no description"}
              </p>
              <p className="author-pop">Author: {author ? author : "n/a"}</p>
              <a className="source-pop" href={url}>
                Read the full article
              </a>
            </ReadMore>
          ) : null}
          <NewsIntro>
            <img
              className="no-image"
              alt=""
              src={
                urlToImage === null
                  ? process.env.PUBLIC_URL + "/no-image.png"
                  : urlToImage
              }
            />
            <h4>{title}</h4>
            <p className="read" onClick={showPopup}>
              Read more...
            </p>
          </NewsIntro>
          <Source>
            <p>Source: {author}</p>
            {switchDateFormat()}
          </Source>
        </TileBox>
      ) : (
        <ListBox>
          {readMore ? (
            <ReadMore>
              <CloseIcon>
                <ImIcons.ImCross onClick={closePopup} />
              </CloseIcon>
              <img
                className="img-pop"
                alt=""
                src={
                  urlToImage === null
                    ? process.env.PUBLIC_URL + "/no-image.png"
                    : urlToImage
                }
              />
              <h4 className="title-pop">{title}</h4>
              <p className="description-pop">
                {description ? description : "This article has no description"}
              </p>
              <p className="author-pop">Author: {author ? author : "n/a"}</p>
              <a className="source-pop" href={url}>
                Read the full article
              </a>
            </ReadMore>
          ) : null}
          <img
            className="no-image"
            alt=""
            src={
              urlToImage === null
                ? process.env.PUBLIC_URL + "/no-image.png"
                : urlToImage
            }
          />
          <div>
            <h4>{title}</h4>
            <p className="read" onClick={showPopup}>
              Read more...
            </p>
            <Source>
              <p> Source: {author}</p>
              {switchDateFormat()}
            </Source>
          </div>
        </ListBox>
      )}
    </>
  );
}

