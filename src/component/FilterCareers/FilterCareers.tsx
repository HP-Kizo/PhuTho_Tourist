import React from "react";
import "./FilterCareers.css";
import { Bag, Map, MapPin, MapPinBlue, TheNV } from "../../assets/Icon";

const FilterCareers: React.FC = () => {
  return (
    <div className="wrap__filterCareers">
      <div className="field">
        <div className="field__header">
          {Bag}
          <h3 className="field__title">Lĩnh vực</h3>
        </div>
        <ul className="field__list">
          <li className="field__item field__item-active">Hướng dẫn viên</li>
          <li className="field__item">Kinh doanh</li>
          <li className="field__item">Kĩ sư xây dựng</li>
          <li className="field__item">Nhân viên kế toán</li>
          <li className="field__item">Nhân viên kĩ thuật</li>
          <li className="field__item">Nhân viên phục vụ</li>
        </ul>
      </div>
      <div className="field">
        <div className="field__header">
          {TheNV}
          <h3 className="field__title">Hình thức làm việc</h3>
        </div>
        <ul className="field__list">
          <li className="field__item field__item-active">Bán thời gian</li>
          <li className="field__item">Nhân viên chính thức</li>
          <li className="field__item">Theo ca</li>
          <li className="field__item">Thực tập</li>
        </ul>
      </div>
      <div className="field">
        <div className="field__header">
          {MapPinBlue}
          <h3 className="field__title">Nơi làm việc</h3>
        </div>
        <ul className="field__list">
          <li className="field__item field__item-active">Cà Phê Vườn Đá</li>
          <li className="field__item">NH Thủy Tạ Đầm Sen</li>
          <li className="field__item">CVVH Đầm Sen</li>
          <li className="field__item">Khách sạn Ngọc Lan</li>
          <li className="field__item">Khách sạn Phú Thọ</li>
          <li className="field__item">KDL Sinh Thái Vàm Sát</li>
          <li className="field__item">Trung tâm DVDL Đầm Sen</li>
          <li className="field__item">VP Phuthotourist</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterCareers;
