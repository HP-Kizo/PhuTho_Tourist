import React from "react";
import { useEffect, useRef, useState } from "react";

import "./Blogs.css";
import Header from "../../component/header/Header";
import Carousel from "../../component/carousel/Carousel";
import VideoBackground from "../../component/background/VideoBackground";
import Footer from "../../component/footer/Footer";
import ArticleSection from "../../component/ArticleSection/ArticleSection";
import Topics from "../../component/Topics/Topics";
import { fetchBlogs } from "../../redux/blogAction";

const Blogs: React.FC = () => {
  const [blogsHeight, setBlogsHeight] = useState<number>(0);
  const blogsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (blogsRef.current) {
      setBlogsHeight(blogsRef.current.clientHeight + 48 - 866);
    }
  }, []);
  return (
    <div className="blogs">
      <Header></Header>
      <div className="wrap__blogs-" ref={blogsRef}>
        <ArticleSection />
        <Topics />
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
