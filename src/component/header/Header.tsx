import React from "react";
import { Logo } from "../../assets/Icon";
import "./Header.css";
import { useParams } from "react-router-dom";

const Header: React.FC = () => {
  const params = useParams();
  console.log(params);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="/">Trang Chủ</a>
          </li>
          <li className="nav-item">
            <a href="/blogs">Bài Viết</a>
          </li>
          <li className="nav-item">{Logo}</li>
          <li className="nav-item">
            <a href="/documents">Tài Liệu</a>
          </li>
          <li className="nav-item">
            <a href="/careers">Tuyển Dụng</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
