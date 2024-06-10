import React from "react";
import "./RelatedPosts.css";
import Card from "../Card/Card";
import { ElipseOff, ElipseOn } from "../../assets/Icon";

const RelatedPosts: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 2,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 3,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 4,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
  ];

  return (
    <div className="related-posts">
      <div className="related-posts__list">
        {posts.map((post) => (
          <div className="related-posts__item">
            <img src={post.image} alt={post.title} className="related-image" />
            <div className="related-content">
              <div className="related-position">
                <span className="related-author">{post.author}</span>
                {ElipseOn}
              </div>
              <div className="related-header">
                <h3 className="related-title">{post.title}</h3>
              </div>

              <div className="related-tags">
                <button className="btn related-tag">Sự kiện</button>
                <button className="btn related-tag">Thông báo</button>
                <button className="btn related-tag">Tin tức</button>
              </div>
              <div className="related-info">
                <span className="related-views">{post.views} lượt xem</span>
                {ElipseOff}
                <span className="related-date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
