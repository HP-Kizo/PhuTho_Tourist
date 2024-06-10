import React from "react";
import Card from "../Card/Card";
import "./BlogSection.css";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchBlogs } from "../../redux/blogAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { blogs, slides, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );
  console.log(slides);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section className="blog-section">
      <div className="blog-section__haeder">
        <h2 className="blog-section__title">CHIA SẺ THÔNG TIN</h2>
        <h1 className="blog-section__main-heading">Bài viết mới</h1>
        <div className="blog-section__wrap">
          <p className="blog-section__main-heading-underline"></p>
        </div>
        <p className="blog-section__description">
          Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về
          những sản phẩm du lịch
        </p>
      </div>
      <div className="blog-section__cards">
        {!loading &&
          blogs
            .slice(0, 3)
            .map((card, index) => <Card key={index} {...card} />)}
      </div>
      <div className="blog-section__footer">
        <button
          className="blog-section__button"
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Xem thêm bài viết
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
