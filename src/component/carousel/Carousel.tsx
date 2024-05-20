import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  interface ImageData {
    width: string;
    height: string;
    background: string;
  }
  const initialImages: ImageData[] = [
    {
      width: "203.614px",
      height: "352.553px",
      background:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/f956747476f23a0835927842c09cbaf58184b62d) transparent -98.091px -56.114px / 199.513% 131.833% no-repeat",
    },
    {
      width: "274.313px",
      height: "472.27px",
      background:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/cdcac184676030355fdb4c3964fc73d09c724f6b) transparent -132.151px -75.168px / 199.513% 131.833% no-repeat",
    },
    {
      width: "377.062px",
      height: "531.658px",
      background:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/42fa95b6c4530aafbe561f2670923775619a0638) transparent 50% / cover no-repeat",
    },
    {
      width: "272.427px",
      height: "471.328px",
      background:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/570db05fabc11bca5ac3630365add4d52d962ebb) transparent -139.859px -75.018px / 199.513% 131.833% no-repeat",
    },
    {
      width: "202.671px",
      height: "351.61px",
      background:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/fa62a44dc68cd3fd7b4db78e92bcc430325b38c5) transparent -104.174px -55.964px / 199.756% 131.833% no-repeat",
    },
  ];
  const [images, setImages] = useState<ImageData[]>(initialImages);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImages((prevImages) => {
  //       const newImages = [...prevImages];
  //       newImages.unshift(newImages.pop()!);
  //       return newImages;
  //     });
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="carousel">
      <div className="carousel__wrap">
        {images.map((img, index) => (
          <button
            key={index}
            className="carousel__item"
            style={{
              width: img.width,
              height: img.height,
              background: img.background,
            }}
          >
            {/* Add any overlay text or elements here */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
