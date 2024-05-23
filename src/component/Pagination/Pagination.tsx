// src/Pagination.tsx
import React from "react";
import "./Pagination.css";

interface PaginationProps {
  totalArticles: number;
  articlesPerPage: number;
  currentPage: number;
  // onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalArticles,
  articlesPerPage,
  currentPage,
  // onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          // onClick={() => onPageChange(number)}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
