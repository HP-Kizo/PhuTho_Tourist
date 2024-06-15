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
import { format } from "date-fns";

const MainBlogs: React.FC<{
  category: string;
  setCategory: (category: string) => void;
}> = ({ category, setCategory }) => {
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
  const [startDate, setStartDate] = useState<string>("2022-01-01");
  const today = format(new Date(), "yyyy-MM-dd");
  const [endDate, setEndDate] = useState<string>(today);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  const documentMainRef = useRef<HTMLDivElement>(null);
  const scrollToDocumentMain = (): void => {
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

  const filteredBlogs: Blog[] = blogs.filter((blog: Blog) => {
    const matchesSearchQuery =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category ? blog.category === category : true;

    const blogDate = new Date(blog.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const matchesDateRange =
      (!start || blogDate >= start) && (!end || blogDate <= end);

    return matchesSearchQuery && matchesCategory && matchesDateRange;
  });

  const sortedBlogs = filteredBlogs.sort((a: Blog, b: Blog) => {
    if (sortBy === "A đến Z") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const totalPages: number = Math.ceil(sortedBlogs.length / itemsPerPage);

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
        category={category}
        onSearchQueryChange={setSearchQuery}
        onSortByChange={setSortBy}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        setCategory={setCategory}
      />
      <div className="main__blogs-content">
        <div className="main__blogs-main">
          {!loading &&
            sortedBlogs
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((blog: Blog) => {
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
