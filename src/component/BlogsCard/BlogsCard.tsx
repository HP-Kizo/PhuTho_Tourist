// src/blogsCard.tsx
import React from "react";
import "./BlogsCard.css";
import { ElipseOff, ElipseOn } from "../../assets/Icon";
import { Blog } from "../../typescripts/Interface";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  function roundUpToNearestThousand(num: number): number {
    return Math.ceil(num / 1000);
  }
  return (
    <div className="blog-card">
      <div className="blog-card__header">
        <img src={blog.image} alt="" className="blog-card__image" />
      </div>
      <div className="blog-card__content">
        <div className="blog-card__position">
          <span className="blog-card__author">Admin</span>
          {ElipseOn}
        </div>
        <h3 className="blog-card__title">{blog.title}</h3>
        <div className="blog-card__desc">{blog.description}</div>
        <div className="blog-card__tags">
          <button className="btn blog-card__tag">Sự kiện</button>
          <button className="btn blog-card__tag">Thông báo</button>
          <button className="btn blog-card__tag">Tin tức</button>
        </div>
        <div className="blog-card__info">
          <span className="blog-card__views">
            {roundUpToNearestThousand(blog.views)}N lượt xem
          </span>
          {ElipseOff}
          <span className="blog-card__date">{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
