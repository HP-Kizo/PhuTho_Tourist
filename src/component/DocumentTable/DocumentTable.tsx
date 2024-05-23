import React, { useState } from "react";
import "./DocumentTable.css";
import {
  ArroowRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  DownLoadIcon,
  NextIcon,
  Search,
} from "../../assets/Icon";

interface Document {
  id: number;
  name: string;
  creationDate: string;
}

const documents: Document[] = [
  { id: 1, name: "Khám phá Hội An - Việt Nam", creationDate: "03/03/12 22:43" },
  {
    id: 2,
    name: "Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h",
    creationDate: "03/03/12 22:43",
  },
  {
    id: 3,
    name: "Chuẩn bị gì sau khi tiêm vaccin Covid-19?",
    creationDate: "03/03/12 22:43",
  },
  { id: 4, name: "SNOW CHANNEL 1", creationDate: "03/03/12 22:43" },
  {
    id: 5,
    name: "Chuẩn bị gì sau khi tiêm vaccin Covid-19?",
    creationDate: "03/03/12 22:43",
  },
  {
    id: 6,
    name: "Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h",
    creationDate: "03/03/12 22:43",
  },
  {
    id: 7,
    name: "Chuẩn bị gì sau khi tiêm vaccin Covid-19?",
    creationDate: "03/03/12 22:43",
  },
  {
    id: 8,
    name: "Du lịch ở Tp.HCM đang như thế nào? 101",
    creationDate: "03/03/12 22:43",
  },
  { id: 9, name: "SNOW CHANNEL 1", creationDate: "03/03/12 22:43" },
  {
    id: 10,
    name: "Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h",
    creationDate: "03/03/12 22:43",
  },
];

const DocumentTable: React.FC = () => {
  const [displayCount, setDisplayCount] = useState<number>(10);

  return (
    <div className="document-table">
      <div className="wrap__document-table">
        <div className="document-table__header">
          <div className="document-table__date">
            <label htmlFor="start-date">Ngày tạo</label>
            <div className="document-table__datePicker">
              <div className="document-table__datePicker-left">
                <input type="date" id="start-date" />
                {Calendar}
              </div>
              <div>{ArroowRight}</div>
              <div className="document-table__datePicker-right">
                <input type="date" id="end-date" />
                {Calendar}
              </div>
            </div>
          </div>
          <div className="document-table__search">
            <label htmlFor="search-keyword">Từ khóa</label>
            <div className="document-table__search-wrap">
              <div>
                <span>{Search}</span>
                <input type="text" id="search-keyword" placeholder="Tìm kiếm" />
              </div>
              <div className="search__delete">
                <span>x</span>
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
            {documents.map((document, index) => (
              <tr key={document.id}>
                <td>{index + 1}</td>
                <td>{document.name}</td>
                <td>{document.creationDate}</td>
                <td className="document-table__download-btn">{DownLoadIcon}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="document-table__footer">
          <div className="document-table__left">
            <span>Hiển thị</span>
            <div>
              <p>10</p>
            </div>
            <span>câu trả lời trong mỗi trang</span>
          </div>
          <div className="document-table__pagination">
            <div>{ArrowLeft}</div>
            <div className="document-table__numberPage">
              <div className="pagination-btn">1</div>
              <div className="pagination-btn">2</div>
              <div className="pagination-btn">3</div>
              <div className="pagination-btn">...</div>
              <div className="pagination-btn">10</div>
            </div>
            <div>{ArrowRight}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentTable;
