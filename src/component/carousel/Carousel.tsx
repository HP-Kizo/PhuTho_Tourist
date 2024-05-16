import React from "react";
import "./Carousel.css";

const slides = [
  {
    image: "/images/slide1.jpg",
    text: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
  },
  {
    image: "/images/slide2.jpg",
    text: "Hơn 1000 bánh chưng lộc cho khách dâng hương tượng vua Hùng tại Đầm Sen",
  },
  {
    image: "/images/slide3.jpg",
    text: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
  },
  {
    image: "/images/slide4.jpg",
    text: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
  },
  {
    image: "/images/slide5.jpg",
    text: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          {/* <div className="carousel-caption">{slide.text}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
