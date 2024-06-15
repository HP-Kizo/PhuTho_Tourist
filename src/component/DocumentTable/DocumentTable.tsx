import React, { useState, useEffect } from "react";
import "./DocumentTable.css";
import {
  ArroowRight,
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  DownLoadIcon,
  IconX,
  Search,
} from "../../assets/Icon";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import DateRangePicker from "../DateRangePicker/DateRangePicker";

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
  const [startDate, setStartDate] = useState<string>("2018-01-01");
  const today: string = format(new Date(), "yyyy-MM-dd");

  const [endDate, setEndDate] = useState<string>(today);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);

  useEffect(() => {
    filterDocuments();
  }, [searchKeyword, startDate, endDate, documentTable]);

  useEffect(() => {
    setCurrentPage(1);
  }, [displayCount]);
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredDocuments]);
  const filterDocuments = () => {
    let filtered: Document[] = documentTable;

    if (searchKeyword) {
      filtered = filtered.filter((doc: Document) =>
        doc.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    if (startDate) {
      filtered = filtered.filter(
        (doc: Document) => new Date(doc.creationDate) >= new Date(startDate)
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (doc: Document) => new Date(doc.creationDate) <= new Date(endDate)
      );
    }

    setFilteredDocuments(filtered);
  };

  const totalPages: number = Math.ceil(filteredDocuments.length / displayCount);
  const startIndex: number = (currentPage - 1) * displayCount;
  const endIndex: number = startIndex + displayCount;
  const paginatedDocuments: Document[] = filteredDocuments.slice(
    startIndex,
    endIndex
  );

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
    return <div className="document-loading">Loading...</div>;
  }

  if (error) {
    return <div className="document-error">Error: {error}</div>;
  }

  const handleDateChange = ({
    startDate,
    endDate,
  }: {
    startDate: Date;
    endDate: Date;
  }) => {
    setStartDate(format(startDate, "yyyy-MM-dd"));
    setEndDate(format(endDate, "yyyy-MM-dd"));
  };

  return (
    <div className="document-table">
      <div className="wrap__document-table">
        <div className="document-table__header">
          <div className="document-table__date">
            <label htmlFor="start-date">Ngày tạo</label>
            <DateRangePicker
              startDate={new Date(startDate)}
              endDate={new Date(endDate)}
              onDateChange={handleDateChange}
            />
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
            {paginatedDocuments.map((document: Document, index: number) => (
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
              {Array.from({ length: totalPages }, (_, i: number) => i + 1).map(
                (page: number) => (
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
