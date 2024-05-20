import React from "react";
import "./Footer.css";
import {
  ElipseWhite,
  Facebook,
  Logo,
  LogoL,
  Mail,
  MapPin,
  Phone,
} from "../../assets/Icon";
import { Copyright } from "../../assets/Icon";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__left">
          <div className="footer__info-top">
            <span className="footer__logo">{LogoL}</span>
            <div className="footer__text">
              <h2 className="footer__title">
                CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
              </h2>
              <h2 className="footer__name">PHUTHOTOURIST</h2>
            </div>
          </div>
          <div className="footer__info-bottom">
            <p className="footer__copyright">Copyright</p>
            <span className="footer__logocopyright">{Copyright}</span>
            <p className="footer__name">
              Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
            </p>
          </div>
        </div>
        <div className="footer__main">
          <h1>LIÊN HỆ</h1>
          <div className="footer__contact">
            <div className="footer__position">
              <span>{MapPin}</span>
              <p className="footer__address">
                15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM
              </p>
            </div>
            <div className="footer__call">
              <span>{Phone}</span>
              <p className="footer__phone">02838650921</p>
            </div>
            <div className="footer__mail">
              <span>{Mail}</span>
              <p className="footer__email">vanphong@damsenpark.vn</p>
            </div>
            <div className="footer__facebook">
              <span>{Facebook}</span>
              <p className="footer__fb">Phuthotourist</p>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <h2 className="footer__links-title">
            CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
          </h2>
          <ul className="footer__links-list">
            <li className="footer__links-items">
              <div className="footer__links-item">
                {ElipseWhite}
                <p className="footer__links-content">
                  Công viên Văn hóa Đầm Sen
                </p>
              </div>
            </li>
            <li className="footer__links-items">
              <div className="footer__links-item">
                {ElipseWhite}
                <p className="footer__links-content">
                  Khu du lịch sinh thái Vàm Sát
                </p>
              </div>
            </li>
            <li className="footer__links-items">
              <div className="footer__links-item">
                {ElipseWhite}
                <p className="footer__links-content">
                  Khách sạn Ngọc Lan (Quận 1)
                </p>
              </div>
            </li>
            <li className="footer__links-items">
              <div className="footer__links-item">
                {ElipseWhite}
                <p className="footer__links-content">
                  Khách sạn Phú Thọ (Quận 11)
                </p>
              </div>
            </li>
            <li className="footer__links-items">
              <div className="footer__links-item">
                {ElipseWhite}
                <p className="footer__links-content">
                  Trung tâm Du lịch Đầm Sen
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
