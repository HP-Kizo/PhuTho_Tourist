import React from "react";
import { useEffect, useRef, useState } from "react";

import "./Blogs.css";
import Header from "../../component/Header/Header";
import Carousel from "../../component/Carousel/Carousel";
import VideoBackground from "../../component/Background/VideoBackground";
import Footer from "../../component/Footer/Footer";
import ArticleSection from "../../component/ArticleSection/ArticleSection";
import Topics from "../../component/Topics/Topics";
import { fetchBlogs } from "../../redux/blogAction";

const Blogs: React.FC = () => {
  return (
    <div className="blogs">
      <Header></Header>
      <div className="wrap__blogs-">
        <ArticleSection />
        <Topics />
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
