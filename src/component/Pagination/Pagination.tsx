// src/Pagination.tsx
import React from "react";
import "./Pagination.css";
import { NextIconSmall, PrevIconSmall } from "../../assets/Icon";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number: number, index: number) => {
    if (
      number === 1 ||
      number === pageNumbers.length ||
      number === currentPage ||
      number === currentPage - 1 ||
      number === currentPage + 1
    ) {
      return (
        <span
          key={number}
          className={`pagination__item ${
            currentPage === number ? "pagination__item--active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      );
    } else if (
      number === currentPage - 2 ||
      number === currentPage + 2 ||
      (number === 2 && currentPage === 4) ||
      (number === pageNumbers.length - 1 &&
        currentPage === pageNumbers.length - 3)
    ) {
      return <span key={index}>...</span>;
    } else {
      return null;
    }
  });

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
        {/* {pageNumbers.map((number) => (
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
        ))} */}
        {renderPageNumbers}
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
