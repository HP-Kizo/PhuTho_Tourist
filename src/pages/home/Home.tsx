import React from "react";
import Header from "../../component/header/Header";
import Carousel from "../../component/carousel/Carousel";
import "./Home.css";
import VideoBackground from "../../component/background/VideoBackground";
import AboutUs from "../../component/aboutUs/AboutUs";
import BlogSection from "../../component/blog/BlogSection";
const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <VideoBackground></VideoBackground>
      <AboutUs></AboutUs>
      <BlogSection />
    </>
  );
};

export default Home;
