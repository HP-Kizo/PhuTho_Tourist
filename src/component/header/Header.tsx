import React from "react";
import { Logo } from "../../assets/Logo";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Trang Chủ</a>
          </li>
          <li className="nav-item">
            <a href="/posts">Bài Viết</a>
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
