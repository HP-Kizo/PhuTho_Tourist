import React from "react";
import "./AsideSection.css";
import { ElipseOff } from "../../assets/Icon";
interface Post {
  id: number;
  title: string;
  views: string;
  date: string;
  imageUrl: string;
}

interface PostListProps {
  posts: Post[];
}

const AsideSection: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="post__list">
      {posts.map((post) => (
        <li key={post.id} className="post">
          <img src={post.imageUrl} alt={post.title} className="post__image" />
          <div className="post__content">
            <h3 className="post__title">{post.title}</h3>
            <div className="post__status">
              <p className="post__views">{post.views + " views"} </p>
              {ElipseOff}
              <p className="post__date">{post.date}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AsideSection;
