import React from "react";
import "./RelatedPosts.css";

const RelatedPosts: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N lượt xem",
      date: "20/02/2022",
      img: "image1.jpg",
    },
    {
      id: 2,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N lượt xem",
      date: "20/02/2022",
      img: "image2.jpg",
    },
    {
      id: 3,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N lượt xem",
      date: "20/02/2022",
      img: "image3.jpg",
    },
    {
      id: 4,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N lượt xem",
      date: "20/02/2022",
      img: "image4.jpg",
    },
  ];

  return (
    <div className="related-posts">
      <div className="related-posts__header">Bài viết liên quan</div>
      <div className="related-posts__list">
        {posts.map((post) => (
          <div className="related-posts__item" key={post.id}>
            <img
              src={post.img}
              alt={post.title}
              className="related-posts__image"
            />
            <div className="related-posts__info">
              <div className="related-posts__title">{post.title}</div>
              <div className="related-posts__meta">
                <span className="related-posts__views">{post.views}</span>
                <span className="related-posts__date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
