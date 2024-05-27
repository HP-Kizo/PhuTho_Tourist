import React from "react";
import { Logo } from "../../assets/Icon";
import "./Header.css";
import { NavLink, useParams } from "react-router-dom";
import VideoBackground from "../background/VideoBackground";

const Header: React.FC = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="header">
      <header className="header__nav">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">Trang Chủ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs">Bài Viết</NavLink>
            </li>
            <li className="nav-item">{Logo}</li>
            <li className="nav-item">
              <NavLink to="/documents">Tài Liệu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/careers">Tuyển Dụng</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <VideoBackground></VideoBackground>
    </div>
  );
};

export default Header;
