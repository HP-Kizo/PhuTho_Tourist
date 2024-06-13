import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ImageData } from "../../typescripts/Interface";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { images, loading, error } = useSelector(
    (state: RootState) => state.bg
  );
  const navigate = useNavigate();
  // const [listImage, setListImage] = useState<string[]>(images);

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
          images.map((img, index) => (
            <div
              key={index}
              className="carousel__item"
              onClick={() => {
                navigate(`/blogs/${img.id}`, { state: { post: img } });
              }}
            >
              <img src={`${img.image}`} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
