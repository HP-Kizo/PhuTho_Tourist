import React, { Children } from "react";
import "./VideoBackground.css";
import Carousel from "../carousel/Carousel";
import { ButtonDown } from "../../assets/Icon";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video">
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/975983259960786434/TEAM/20c8/9cbb/-b581-45d9-98eb-64676259fd20?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KmRvNGcG2hTFd88kh4lguMYklGdMYm4G4HAADTBJukrYRG~2QviJkrZA1DdZmSSRRTHsgwiQvbxWrPZrjecRsCuyz54VkNvkf~WoANfLKYjC-oA2BnR4VQl3tFO8hlDgEwMU1BpMnEqv8y0BOPE-lKZP410Yl64oioNoV7XH4lKhaC4q0nAQnEf6YTz2cTgZaiMz~EpGCeUNES5DYG1jejAAA7rGm2eXORYGnq2sQsj5Isg0AQVeqbIeGYaTrc3Yh-uu6Z6Y3FtIrPKTyPfGE6HlhRmhtRdkw5qYciZzEHtyaZdOPOG4zQ0aqH-41GRtZnNCLq4-0~jMH5i~U6bP0w__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
