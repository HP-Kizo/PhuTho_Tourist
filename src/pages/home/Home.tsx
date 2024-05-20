import React from "react";
import Header from "../../component/header/Header";
import Carousel from "../../component/carousel/Carousel";
import "./Home.css";
import VideoBackground from "../../component/background/VideoBackground";
import AboutUs from "../../component/aboutUs/AboutUs";
import BlogSection from "../../component/blog/BlogSection";
import Services from "../../component/services/Services";
import Footer from "../../component/footer/Footer";
import { ButtonDown } from "../../assets/Icon";
import MainHeaderHome from "../../component/MainHeaderHome/MainHeaderHome";
const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <VideoBackground>
        <MainHeaderHome></MainHeaderHome>
      </VideoBackground>
      <AboutUs></AboutUs>
      <BlogSection />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
