import React from "react";
import "./RelatedPosts.css";
import { ElipseOff, ElipseOn } from "../../assets/Icon";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Blog } from "../../typescripts/Interface";

const RelatedPosts: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const postId: number = parseInt(params.id || "", 10);
  const { blogs, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const relatedPosts: Blog[] = blogs
    .filter((post: Blog) => post.id !== postId)
    .slice(0, 4);

  return (
    <div className="related-posts">
      <div className="related-posts__list">
        {relatedPosts.map((post: Blog) => (
          <div
            key={post.id}
            className="related-posts__item"
            onClick={() => {
              navigate(`/blogs/${post.id}`, { state: { post } });
            }}
          >
            <div className="related__wrap-image">
              <img
                src={post.image}
                alt={post.title}
                className="related-image"
              />
              <div className="blog-card__hover-text">Click để xem</div>
            </div>
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
