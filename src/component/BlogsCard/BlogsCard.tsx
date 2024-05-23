// src/blogsCard.tsx
import React from "react";
import "./BlogsCard.css";
import { ElipseOff, ElipseOn } from "../../assets/Icon";
export interface Blog {
  id: number;
  image: string;
  title: string;
  date: string;
  views: string;
}
interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
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
        <div className="blog-card__tags">
          <button className="btn blog-card__tag">Sự kiện</button>
          <button className="btn blog-card__tag">Thông báo</button>
          <button className="btn blog-card__tag">Tin tức</button>
        </div>
        <div className="blog-card__info">
          <span className="blog-card__views">{blog.views} lượt xem</span>
          {ElipseOff}
          <span className="blog-card__date">{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
