// src/ArticleList.tsx
import React from "react";
import "./MainBlogs.css";
import BlogCard from "../BlogsCard/BlogsCard";
import SearchFilterBar from "../SearchFilterBar/SearchFilterBar";
import Pagination from "../Pagination/Pagination";

interface Blogs {
  id: number;
  image: string;
  title: string;
  date: string;
  views: string;
}

interface BlogListProps {
  blogs: Blogs[];
}
// const onPageChange = (page: number) => {
//   console.log(page);
//   return;
// };

const MainBlogs: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="main__blogs">
      <SearchFilterBar />
      <div className="main__blogs-content">
        <div className="main__blogs-main">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <Pagination
        totalArticles={48}
        articlesPerPage={12}
        currentPage={1}
        // onPageChange
      />
    </div>
  );
};

export default MainBlogs;
