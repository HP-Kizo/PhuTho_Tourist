import React from "react";
import { NavLink } from "react-router-dom";
import { LogoM, Menu, XMark } from "../../assets/Icon";
import "./MobileNavbar.css";

interface MobileNavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <nav className="navbar navbar__S">
      {!isOpen && (
        <ul className="nav-list">
          <li className="nav-item">{LogoM}</li>
          <li className="nav-item" onClick={toggleMenu}>
            {Menu}
          </li>
        </ul>
      )}
      {isOpen && (
        <ul className="dropdown-menu">
          <div className="dropdown-cancel" onClick={toggleMenu}>
            {XMark}
          </div>
          <li className="drop-item">
            <NavLink to="/" onClick={toggleMenu}>
              Trang Chủ
            </NavLink>
          </li>
          <li className="drop-item">
            <NavLink to="/blogs" onClick={toggleMenu}>
              Bài Viết
            </NavLink>
          </li>
          <li className="drop-item">
            <NavLink to="/documents" onClick={toggleMenu}>
              Tài Liệu
            </NavLink>
          </li>
          <li className="drop-item">
            <NavLink to="/careers" onClick={toggleMenu}>
              Tuyển Dụng
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
