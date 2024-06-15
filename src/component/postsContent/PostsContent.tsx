import React from "react";
import "./PostsContent.css";
import { useLocation } from "react-router-dom";
const PostsContent = () => {
  const location = useLocation();
  const posts = location.state?.post;
  function formatDateToRelativeWeeks(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
      "vi-VN",
      options
    );
    console.log(dateFormatter);

    const targetDate: Date = new Date(date);

    return dateFormatter.format(targetDate);
  }

  return (
    <>
      {posts ? (
        <div className="posts__item">
          <div className="posts__header">
            <h1 className="posts__title">{posts.title}</h1>
            <p className="posts__by">
              by tuyendung in on {formatDateToRelativeWeeks(posts.date)}
            </p>
          </div>
          <div className="posts__content">
            <div
              className="posts__image"
              style={{
                backgroundImage: `url(${posts.image})`,
                backgroundColor: "lightgray",
                backgroundPosition: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="posts__main">
              <h1>{posts.content.intro}</h1>
              <ul>
                {posts.content.auctionDetails.map(
                  (detail: string[], index: number) => (
                    <li key={index}>{detail}</li>
                  )
                )}
              </ul>
              <div>
                <h2>Kết quả lựa chọn đơn vị:</h2>
                <ul>
                  <li>{posts.content.result.selectedCompany}</li>
                  <li>{posts.content.result.price}</li>
                  <li>{posts.content.result.ranking}</li>
                  <li>{posts.content.result.contract}</li>
                </ul>
              </div>
              <div>{posts.content.notice}</div>
            </div>
            <div
              className="posts__file"
              style={{
                backgroundImage: `url(${posts.file})`,
                backgroundColor: "lightgray",
                backgroundPosition: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostsContent;
