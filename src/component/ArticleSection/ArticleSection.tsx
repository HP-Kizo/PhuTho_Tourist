import React, { useEffect, useState } from "react";
import "./ArticleSection.css";
import {
  ActiveIcon,
  InActiveIcon,
  NextIcon,
  Polygon,
  PrevIcon,
} from "../../assets/Icon";
import AsideSection from "../AsideSection/AsideSection";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogAction";

interface Slide {
  id: string;
  image: string;
  title: string;
  description: string;
}

const ArticleSection: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { blogs, slides, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlerPrev = (): void => {
    setCurrentSlide((prev: number) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handlerNext = (): void => {
    setCurrentSlide((prev: number) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <article className="article">
      <div className="wrap__polygon">
        {Polygon}
        <h1 className="polygon__title">BÀI VIẾT</h1>
      </div>
      <div className="wrap__article">
        <div className="article-section">
          {!loading && slides && slides.length > 0 && (
            <div className="sliders">
              <div
                className="slider__image"
                onClick={() => {
                  navigate(`${slides[currentSlide].id}`, {
                    state: { post: slides[currentSlide] },
                  });
                }}
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${slides[currentSlide].image}) lightgray 50% / cover no-repeat`,
                }}
              >
                <div className="slider__hover-text">Click để xem</div>
              </div>
              <div className="slider__main">
                <div className="slider__content">
                  <h2 className="slider__content-title">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="slider__content-description">
                    {slides[currentSlide].description}
                  </p>
                </div>
                <div className="slider__controls">
                  <button onClick={handlerPrev}>{PrevIcon}</button>
                  <button onClick={handlerNext}>{NextIcon}</button>
                </div>
              </div>
              <div className="slider__icons">
                {!loading &&
                  slides.map((_, index: number) => (
                    <button
                      key={index}
                      className={currentSlide === index ? "active" : ""}
                      onClick={() => setCurrentSlide(index)}
                    >
                      {currentSlide === index ? ActiveIcon : InActiveIcon}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
        <aside className="aside__section">
          <h3 className="aside__title">Bài mới nhất</h3>
          <AsideSection />
        </aside>
      </div>
    </article>
  );
};

export default ArticleSection;
