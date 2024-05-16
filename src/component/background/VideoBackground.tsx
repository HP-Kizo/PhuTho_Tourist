import React from "react";
import "./VideoBackground.css";
import Carousel from "../carousel/Carousel";
import { ButtonDown } from "../../assets/ButtonDown";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video">
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/975983259960786434/TEAM/20c8/9cbb/-b581-45d9-98eb-64676259fd20?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAT9xl6MGCWaZ4X5iPfBELvVBydnFyJEgVayPt10KmcfBQ8EpGWcjlYM6yZF8fgyu9lu3PYmXeTAgLDhXPb32fedVtL4oemX2no352o2AM5nJcyWkMkJitiqkXQBL1BWsZe~UnbBZyjppIxE4e3-soA1fjZAT9EjeyYvTIykG0RxG~Y6apESN2W8yOqUqGsXU06GpAgiezjgZb6~ql0vLjH28U2QR8Dj67zrNJOi~QFl3uy14doj9I-uJQ4Ba87yKveyY0h6wxy5XSl8hF6ZwBXMoMygvqfjPwcgKd3ZS2BJLhDvADfRcXoAw~4I-GScQBehzgXideX7~PrXUV8N6w__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <main className="main-content">
        <section className="header-section">
          <div className="header-text">
            <h1 className="company-name">
              CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
            </h1>
            <h1 className="company-short-name">PHUTHOTOURIST</h1>
          </div>
          <p className="subtitle">Ngày thành lập 01/01/2019</p>
        </section>
        <Carousel />
        <div className="button-down">{ButtonDown}</div>
      </main>
    </div>
  );
};

export default VideoBackground;
