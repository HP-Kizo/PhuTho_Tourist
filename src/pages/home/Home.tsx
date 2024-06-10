import React, { useRef } from "react";
import Header from "../../component/Header/Header";
import Carousel from "../../component/Carousel/Carousel";
import "./Home.css";
import VideoBackground from "../../component/Background/VideoBackground";
import AboutUs from "../../component/AboutUs/AboutUs";
import BlogSection from "../../component/BlogSection/BlogSection";
import Services from "../../component/servicesHome/Services";
import Footer from "../../component/Footer/Footer";
import { ButtonDown } from "../../assets/Icon";
import MainHeaderHome from "../../component/MainHeaderHome/MainHeaderHome";
const Home: React.FC = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home">
      <Header></Header>
      <MainHeaderHome scrollToAboutUs={scrollToAboutUs}></MainHeaderHome>
      <div ref={aboutUsRef}>
        <AboutUs></AboutUs>
      </div>
      <BlogSection />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
