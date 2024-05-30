import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/Icon";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar__L">
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
  );
};

export default Navbar;
