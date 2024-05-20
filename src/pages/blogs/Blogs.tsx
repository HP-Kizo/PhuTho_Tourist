import React from "react";
import "./Blogs.css";
import Header from "../../component/header/Header";
import Carousel from "../../component/carousel/Carousel";
import VideoBackground from "../../component/background/VideoBackground";

import Footer from "../../component/footer/Footer";
import ArticleSection from "../../component/ArticleSection/ArticleSection";
import Topics from "../../component/Topics/Topics";
const Blogs: React.FC = () => {
  return (
    <>
      <Header></Header>
      <VideoBackground>
        <ArticleSection />
        <Topics />
      </VideoBackground>
      {/* <Footer /> */}
    </>
  );
};

export default Blogs;
