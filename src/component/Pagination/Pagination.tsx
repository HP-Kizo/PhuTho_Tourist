// src/Pagination.tsx
import React from "react";
import "./Pagination.css";
import { NextIconSmall, PrevIconSmall } from "../../assets/Icon";

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
      <div className="pagination__prev-icon">{PrevIconSmall}</div>
      <div className="pagination__page">
        {pageNumbers.map((number) => (
          <button
            key={number}
            // onClick={() => onPageChange(number)}
            className={
              number === currentPage
                ? "active pagination__numberPage"
                : "pagination__numberPage"
            }
          >
            {number}
          </button>
        ))}
      </div>
      <div className="pagination__next-icon">{NextIconSmall}</div>
    </div>
  );
};

export default Pagination;
