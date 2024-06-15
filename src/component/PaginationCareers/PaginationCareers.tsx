import React from "react";
import "./PaginationCareers.css";
import { NextIconSmall, PrevIconSmall } from "../../assets/Icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationCareers: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number: number) => {
    if (
      number === currentPage ||
      number === currentPage - 1 ||
      number === currentPage + 1 ||
      number === 1 ||
      number === totalPages
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
    } else if (number === currentPage - 2 || number === currentPage + 2) {
      return <span key={number}>...</span>;
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
      {renderPageNumbers}

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

export default PaginationCareers;
