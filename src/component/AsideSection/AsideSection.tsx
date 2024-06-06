import React, { useEffect } from "react";
import "./AsideSection.css";
import { ElipseOff } from "../../assets/Icon";
import { Blog } from "../../typescripts/Interface";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogAction";
const AsideSection: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { blogs, slides, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  function roundUpToNearestThousand(num: number): number {
    return Math.ceil(num / 1000);
  }
  function parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split("-");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  const sortedBlogs = blogs
    .slice()
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, 10);
  return (
    <ul className="post__list">
      {sortedBlogs.map((post) => (
        <li key={post.id} className="post">
          <img src={post.image} alt={post.title} className="post__image" />
          <div className="post__content">
            <h3 className="post__title">{post.title}</h3>
            <div className="post__status">
              <p className="post__views">
                {roundUpToNearestThousand(post.views) + "N views"}{" "}
              </p>
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
