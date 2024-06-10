import React, { useEffect, useState, useRef } from "react";
import "./MainBlogs.css";
import BlogCard from "../BlogsCard/BlogsCard";
import SearchFilterBar from "../SearchFilterBar/SearchFilterBar";
import Pagination from "../Pagination/Pagination";
import { Blog } from "../../typescripts/Interface";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogAction";

const MainBlogs: React.FC<{ category: string }> = ({ category }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { blogs, slides, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("A đến Z");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  const documentMainRef = useRef<HTMLDivElement>(null);
  const scrollToDocumentMain = () => {
    if (documentMainRef.current) {
      documentMainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    return;
  };

  useEffect(() => {
    if (!isInitialRender) {
      scrollToDocumentMain();
    }
    setIsInitialRender(false);
  }, [currentPage]);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearchQuery =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category ? blog.category === category : true;
    const matchesDateRange =
      (!startDate || new Date(blog.date) >= new Date(startDate)) &&
      (!endDate || new Date(blog.date) <= new Date(endDate));

    return matchesSearchQuery && matchesCategory && matchesDateRange;
  });

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortBy === "A đến Z") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <div className="main__blogs" ref={documentMainRef}>
      <SearchFilterBar
        searchQuery={searchQuery}
        sortBy={sortBy}
        startDate={startDate}
        endDate={endDate}
        onSearchQueryChange={setSearchQuery}
        onSortByChange={setSortBy}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <div className="main__blogs-content">
        <div className="main__blogs-main">
          {!loading &&
            sortedBlogs
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
              })}
        </div>
      </div>
      {!loading && sortedBlogs.length !== 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default MainBlogs;
