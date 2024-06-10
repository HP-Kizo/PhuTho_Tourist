import React, { Children } from "react";
import "./VideoBackground.css";
import Carousel from "../Carousel/Carousel";
import { ButtonDown } from "../../assets/Icon";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const VideoBackground: React.FC = () => {
  const { backgroundUrl, loading, error } = useSelector(
    (state: RootState) => state.bg
  );
  return (
    <div className="video-background">
      {!loading && (
        <video autoPlay loop muted playsInline className="video">
          <source src={`${backgroundUrl}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
