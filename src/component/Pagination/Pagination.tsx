// src/Pagination.tsx
import React from "react";
import "./Pagination.css";
import { NextIconSmall, PrevIconSmall } from "../../assets/Icon";

interface PaginationProps {
  totalArticles: number;
  articlesPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalArticles,
  articlesPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div
        className={
          currentPage === 1
            ? "pagination__prev-icon pagination__icon-disable"
            : "pagination__prev-icon"
        }
        onClick={() =>
          onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
        }
      >
        {PrevIconSmall}
      </div>
      <div className="pagination__page">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={
              number === currentPage
                ? "pagination__active pagination__numberPage"
                : "pagination__numberPage"
            }
          >
            {number}
          </button>
        ))}
      </div>
      <div
        className={
          currentPage === pageNumbers.length
            ? "pagination__next-icon pagination__icon-disable"
            : "pagination__next-icon"
        }
        onClick={() => {
          onPageChange(
            currentPage !== pageNumbers.length ? currentPage + 1 : currentPage
          );
        }}
      >
        {NextIconSmall}
      </div>
    </div>
  );
};

export default Pagination;
