import React from "react";
import { ButtonDown } from "../../assets/Icon";
import Carousel from "../carousel/Carousel";
import "./MainHeaderHome.css";
interface MainHeaderHomeProps {
  scrollToAboutUs: () => void;
}
const MainHeaderHome: React.FC<MainHeaderHomeProps> = ({ scrollToAboutUs }) => {
  return (
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
      <div className="button-down" onClick={scrollToAboutUs}>
        {ButtonDown}
      </div>
    </main>
  );
};

export default MainHeaderHome;
