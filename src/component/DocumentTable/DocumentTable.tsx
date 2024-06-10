import React, { useState, useEffect } from "react";
import "./DocumentTable.css";
import {
  ArroowRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  DownLoadIcon,
  IconX,
  Search,
} from "../../assets/Icon";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface Document {
  id: number;
  name: string;
  fileUrl: string;
  creationDate: string;
}

const DocumentTable: React.FC = () => {
  const { documentTable, loading, error } = useSelector(
    (state: RootState) => state.documents
  );
  const [displayCount, setDisplayCount] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);

  useEffect(() => {
    filterDocuments();
  }, [searchKeyword, startDate, endDate, documentTable]);
  useEffect(() => {
    setCurrentPage(1);
  }, [displayCount]);
  const filterDocuments = () => {
    let filtered = documentTable;

    if (searchKeyword) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    if (startDate) {
      filtered = filtered.filter(
        (doc) => new Date(doc.creationDate) >= new Date(startDate)
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (doc) => new Date(doc.creationDate) <= new Date(endDate)
      );
    }

    setFilteredDocuments(filtered);
  };

  const totalPages = Math.ceil(filteredDocuments.length / displayCount);
  const startIndex = (currentPage - 1) * displayCount;
  const endIndex = startIndex + displayCount;
  const paginatedDocuments = filteredDocuments.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  const handleDownload = (fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "filename.ext");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="document-table">
      <div className="wrap__document-table">
        <div className="document-table__header">
          <div className="document-table__date">
            <label htmlFor="start-date">Ngày tạo</label>
            <div className="document-table__datePicker">
              <div className="document-table__datePicker-left">
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
                {Calendar}
              </div>
              <div>{ArroowRight}</div>
              <div className="document-table__datePicker-right">
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
                {Calendar}
              </div>
            </div>
          </div>
          <div className="document-table__search">
            <label htmlFor="search-keyword">Từ khóa</label>
            <div className="document-table__search-wrap">
              <div>
                <span>{Search}</span>
                <input
                  type="text"
                  id="search-keyword"
                  placeholder="Tìm kiếm"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
              </div>
              <div
                className="search__delete"
                onClick={() => setSearchKeyword("")}
              >
                {IconX}
              </div>
            </div>
          </div>
        </div>
        <table className="document-table__table">
          <thead className="document-table__thead">
            <tr>
              <th>STT</th>
              <th>Tên tài liệu</th>
              <th>Ngày tạo</th>
              <th>Tải tài liệu</th>
            </tr>
          </thead>
          <tbody className="document-table__tbody">
            {paginatedDocuments.map((document, index) => (
              <tr key={document.id}>
                <td>{startIndex + index + 1}</td>
                <td>
                  <span className="document-table_name">{document.name}</span>
                  <span className="document-table_date">
                    {document.creationDate}
                  </span>
                </td>
                <td>{document.creationDate}</td>
                <td
                  className="document-table__download-btn"
                  onClick={() => handleDownload(document.fileUrl)}
                >
                  {DownLoadIcon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="document-table__footer">
          <div className="document-table__left">
            <span>Hiển thị</span>
            <select
              value={displayCount}
              onChange={(e) => setDisplayCount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
            <span>câu trả lời trong mỗi trang</span>
          </div>
          <div className="document-table__pagination">
            <div
              className={
                currentPage === 1
                  ? "pagination-prev pagination-btn pagination__icon-disable"
                  : "pagination-prev pagination-btn"
              }
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {ArrowLeft}
            </div>
            <div className="document-table__numberPage">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    className={`pagination-btn ${
                      currentPage === page ? "pagination-btn__active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </div>
                )
              )}
            </div>
            <div
              className={
                currentPage === totalPages
                  ? "pagination-next pagination-btn pagination__icon-disable"
                  : "pagination-next pagination-btn"
              }
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {ArrowRight}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentTable;
