import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  // Function to truncate text to a specified number of words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  // Function to truncate title to a specified number of characters
  const truncateTitle = (text, charLimit) => {
    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  };

  return (
    <>
      <div className="card" style={{ width: "18rem", marginTop: "2rem" }}>
        <div style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={
              !imageUrl
                ? "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="News"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{truncateTitle(title, 50)}</h5>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "50%", zIndex: "1", marginTop: "2rem", marginLeft: "-6rem" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text">{truncateText(description, 30)}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
