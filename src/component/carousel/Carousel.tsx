import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ImageData } from "../../typescripts/Interface";

const Carousel = () => {
  const { images, loading, error } = useSelector(
    (state: RootState) => state.bg
  );

  const initialImages: ImageData[] = [
    {
      width: "203.614px",
      height: "352.553px",
      backgroundImage:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/f956747476f23a0835927842c09cbaf58184b62d)",
      backgroundPosition: "-98.091px -56.114px",
      backgroundSize: "199.513% 131.833%",
      backgroundRepeat: "no-repeat",
      backgroundColor: "transparent",
    },
    {
      width: "274.313px",
      height: "472.27px",
      backgroundImage:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/cdcac184676030355fdb4c3964fc73d09c724f6b)",
      backgroundPosition: "-132.151px -75.168px",
      backgroundSize: "199.513% 131.833%",
      backgroundRepeat: "no-repeat",
      backgroundColor: "transparent",
    },
    {
      width: "377.062px",
      height: "531.658px",
      backgroundImage:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/42fa95b6c4530aafbe561f2670923775619a0638)",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "transparent",
    },
    {
      width: "272.427px",
      height: "471.328px",
      backgroundImage:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/570db05fabc11bca5ac3630365add4d52d962ebb)",
      backgroundPosition: "-139.859px -75.018px",
      backgroundSize: "199.513% 131.833%",
      backgroundRepeat: "no-repeat",
      backgroundColor: "transparent",
    },
    {
      width: "202.671px",
      height: "351.61px",
      backgroundImage:
        "url(https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/fa62a44dc68cd3fd7b4db78e92bcc430325b38c5)",
      backgroundPosition: "-104.174px -55.964px",
      backgroundSize: "199.756% 131.833%",
      backgroundRepeat: "no-repeat",
      backgroundColor: "transparent",
    },
  ];
  const [listImage, setListImage] = useState<string[]>(images);
  console.log(listImage);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setListImage((prevImages) => {
  //       const newImages = [...prevImages];
  //       const firstImage = newImages.shift()!;
  //       newImages.push(firstImage);
  //       return newImages;
  //     });
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [listImage]);
  return (
    <div className="carousel">
      <div className="carousel__wrap">
        {!loading &&
          initialImages.map((img, index) => (
            <div
              key={index}
              className="carousel__item"
              style={{
                width: img.width,
                height: img.height,
                backgroundImage: `url(${images[index]})`,
                backgroundPosition: img.backgroundPosition,
                backgroundSize: img.backgroundSize,
                backgroundRepeat: img.backgroundRepeat,
                backgroundColor: img.backgroundColor,
                transition: "background-image 0.5s ease-in-out",
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
