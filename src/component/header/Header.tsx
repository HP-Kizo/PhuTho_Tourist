import React, { useEffect, useState } from "react";
import { Logo, LogoM, Menu, XMark } from "../../assets/Icon";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { NavLink, useParams } from "react-router-dom";
import VideoBackground from "../background/VideoBackground";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchBg } from "../../redux/bgAction";
import MobileNavbar from "../Navbar/MobileNavbar";
const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { backgroundUrl, images, loading, error } = useSelector(
    (state: RootState) => state.bg
  );
  console.log("BG", backgroundUrl);

  useEffect(() => {
    dispatch(fetchBg());
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <header className="header__nav">
        <Navbar />

        <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
      <VideoBackground></VideoBackground>
    </div>
  );
};

export default Header;
