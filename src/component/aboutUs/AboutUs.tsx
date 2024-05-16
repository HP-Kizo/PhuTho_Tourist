import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="about-us--header">
          <span className="section-title">VỀ CHÚNG TÔI</span>
          <h1 className="main-heading">
            Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!
          </h1>
        </div>
        <div className="about-us--main">
          <p className="description">
            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn
            vị thành viên của Saigontourist. Phuthotourist được biết đến với các
            sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
          </p>
          <br />
          <ul className="services-list">
            <li>Công viên Văn hóa Đầm Sen</li>
            <li>Khu du lịch sinh thái Vàm Sát</li>
            <li>Khách sạn Ngọc Lan</li>
            <li>Khách sạn Đồng Khánh</li>
            <li>
              Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)
            </li>
            <li>Nhà hàng Thủy Tạ Đầm Sen</li>
            <li>Cà phê Vườn Đá</li>
            <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
            <li>Liên kết với Công viên nước Đầm Sen (Damsen Water Park).</li>
          </ul>
        </div>
        <div className="about-us--footer">
          <button className="details-button">Xem chi tiết</button>
        </div>
      </div>
      <div className="about-us-images">
        <img
          src="https://s3-alpha-sig.figma.com/img/d235/92b4/a55f5987174f55994588fa32d2c974d6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dvUg4xPH8fT5MDA8PnkIW8M8YgdB9vyQFRFl76hPaKtnRorD1j4Dyo749iXmwf1pczB3B6de~sIdMyNKUFYTl4LCZdJC0VRCUQ3U2rcG2NvlMNi1fIfBv5uDlYrw1KQrra5Qv2wLo4jy27o8BDwBZVpI1AS7cT03ygqB~G8Jx-jqQO-BjaVonmtj4AJi0TCI2D5lQJejVSSYM8X8bT3vbXEEKPdQ~zA45xmXhtP-EewFqC2Jlcu5BjgfRMTzkMpJpmEkxqqVoeGGQrDatHHkVasTr4JNb0qmt5Htgo-Q-eXp8V22jRMCwFXignGwJsE7plvEj-JHyTtVJAA~u99uCA__"
          alt="Image 1"
          className="about-us-image image-1"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/1931/3fbf/54515f37aa3b31db6ea91eddad520eee?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMNmewNq8Ilc1YGs~JjeUaMHoYt4IGySjENEPpV-9izvY2EJ1iCjhtZ0Ebo0eQQhuWqxP9f9pyXRDLTldo-D1-SEx7~8Mp72Qnme72rPtjHO2vHRIGawQk68aNVqz-jWg9eLVugQga5adLxmveAlObdb4HvL1XZHZDfFqVwHW4NPGuMhhH5Xraqg5L3W~-CkmJOEK-zmAXoBs-~cvJEb~sgjDUMjONK61tbLy~0MysLGSsDjTr4XuODOPBDYkNKrIuFvTZeLPWetI-nPgQl1B71A9TArRlK-mMy3KbrapteRw2bW~LfoxC1zssSMfvVNpLsOACSvE8AJtuZZ~mcz8g__"
          alt="Image 2"
          className="about-us-image image-2"
        />
      </div>
    </section>
  );
};

export default AboutUs;
