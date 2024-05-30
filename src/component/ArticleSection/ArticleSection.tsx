import React from "react";
import "./ArticleSection.css";
import {
  ActiveIcon,
  InActiveIcon,
  NextIcon,
  Polygon,
  PrevIcon,
} from "../../assets/Icon";
import AsideSection from "../AsideSection/AsideSection";

const ArticleSection: React.FC = () => {
  interface ImageData {
    background: string;
    title: string;
    description: string;
  }
  const images: ImageData[] = [
    {
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15) lightgray 50% / cover no-repeat",
      title:
        "Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng",
      description:
        "THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.",
    },
  ];
  const posts = [
    {
      id: 1,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 2,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 3,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 4,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 5,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 6,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 7,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 8,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 9,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
    {
      id: 10,
      title: "Thông báo đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10k",
      date: "20/02/2022",
      imageUrl:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7a6937770d1dc0f4fa04f1ec6fd92cb8552c3d15",
    },
  ];
  const handlerPrev = () => {};
  const handlerNext = () => {};
  // let currentIndex = 0;
  // const slides = document.querySelectorAll(".slide");
  // const totalSlides = slides.length;

  // function showSlide(index) {
  //   const newTransform = -index * 100 + "%";
  //   slides.forEach((slide) => {
  //     slide.style.transform = `translateX(${newTransform})`;
  //   });
  // }

  // function nextSlide() {
  //   currentIndex = (currentIndex + 1) % totalSlides;
  //   showSlide(currentIndex);
  // }

  // function prevSlide() {
  //   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  //   showSlide(currentIndex);
  // }

  return (
    <article className="article">
      <div className="wrap__polygon">
        {Polygon}
        <h1 className="polygon__title">BÀI VIẾT</h1>
      </div>
      <div className="wrap__article">
        <div className="article-section">
          <div className="sliders">
            <div
              className="slider__image"
              style={{
                width: "1134px",
                height: "386px",
                background: images[0].background,
              }}
            ></div>
            <div className="slider__main">
              <div className="slider__content">
                <h2 className="slider__content-title">{images[0].title}</h2>
                <p className="slider__content-description">
                  {images[0].description}
                </p>
              </div>
              <div className="slider__controls">
                <button onClick={handlerPrev}>{PrevIcon}</button>
                <button onClick={handlerNext}>{NextIcon}</button>
              </div>
            </div>
            <div className="slider__icons">
              <button>{ActiveIcon}</button>
              <button>{InActiveIcon}</button>
              <button>{InActiveIcon}</button>
              <button>{InActiveIcon}</button>
            </div>
          </div>
        </div>
        <aside className="aside__section">
          <h3 className="aside__title">Bài mới nhất</h3>
          <AsideSection posts={posts} />
        </aside>
      </div>
    </article>
  );
};

export default ArticleSection;
