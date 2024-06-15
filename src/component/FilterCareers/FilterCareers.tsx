import React, { useState, useEffect, useRef } from "react";
import "./FilterCareers.css";
import {
  Bag,
  TheNV,
  MapPinBlue,
  IconX,
  Search,
  VectorBlue,
  Menu,
  Menu_S,
} from "../../assets/Icon";

interface FilterCareersProps {
  searchKeyword: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedField: string;
  selectedForm: string;
  selectedPlace: string;
  onFilterChange: (filterType: string, value: string) => void;
  onResetFilters: () => void;
}

const FilterCareers: React.FC<FilterCareersProps> = ({
  searchKeyword,
  onSearchChange,
  selectedField,
  selectedForm,
  selectedPlace,
  onFilterChange,
  onResetFilters,
}) => {
  const handleFilterClick = (filterType: string, value: string) => {
    if (filterType === "field" && selectedField === value) {
      onFilterChange("field", "");
    } else if (filterType === "form" && selectedForm === value) {
      onFilterChange("form", "");
    } else if (filterType === "place" && selectedPlace === value) {
      onFilterChange("place", "");
    } else {
      onFilterChange(filterType, value);
    }
  };
  const searchRef = useRef<HTMLDivElement>(null);
  const scrollToSearch = (): void => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  useEffect(() => {
    if (isFilterVisible) {
      scrollToSearch();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterVisible]);

  return (
    <div
      className={
        !isFilterVisible
          ? "careers__content-filter "
          : "careers__content-filter careers__content-filter-w"
      }
      ref={searchRef}
    >
      <div className="searchBar">
        <div>
          {Search}
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="searchBar__input"
            value={searchKeyword}
            onChange={onSearchChange}
          />
        </div>
        <div
          className="toggle-filter-btn"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          {Menu_S}
        </div>
      </div>

      <div
        className={`wrap__filterCareers ${
          isFilterVisible ? "visible" : "hidden"
        }`}
      >
        {VectorBlue}
        <div className="wrap__field">
          <div className="field">
            <div className="field__header">
              {Bag}
              <h3 className="field__title">Lĩnh vực</h3>
            </div>
            <ul className="field__list">
              <li
                className={`field__item ${
                  selectedField === "Hướng dẫn viên" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("field", "Hướng dẫn viên")}
              >
                Hướng dẫn viên
              </li>
              <li
                className={`field__item ${
                  selectedField === "Kinh doanh" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("field", "Kinh doanh")}
              >
                Kinh doanh
              </li>
              <li
                className={`field__item ${
                  selectedField === "Kĩ sư xây dựng" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("field", "Kĩ sư xây dựng")}
              >
                Kĩ sư xây dựng
              </li>
              <li
                className={`field__item ${
                  selectedField === "Nhân viên kế toán"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("field", "Nhân viên kế toán")}
              >
                Nhân viên kế toán
              </li>
              <li
                className={`field__item ${
                  selectedField === "Nhân viên kĩ thuật"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("field", "Nhân viên kĩ thuật")}
              >
                Nhân viên kĩ thuật
              </li>
              <li
                className={`field__item ${
                  selectedField === "Nhân viên phục vụ"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("field", "Nhân viên phục vụ")}
              >
                Nhân viên phục vụ
              </li>
            </ul>
          </div>
          <div className="field">
            <div className="field__header">
              {TheNV}
              <h3 className="field__title">Hình thức làm việc</h3>
            </div>
            <ul className="field__list">
              <li
                className={`field__item ${
                  selectedForm === "Bán thời gian" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("form", "Bán thời gian")}
              >
                Bán thời gian
              </li>
              <li
                className={`field__item ${
                  selectedForm === "Nhân viên chính thức"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterClick("form", "Nhân viên chính thức")
                }
              >
                Nhân viên chính thức
              </li>
              <li
                className={`field__item ${
                  selectedForm === "Theo ca" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("form", "Theo ca")}
              >
                Theo ca
              </li>
              <li
                className={`field__item ${
                  selectedForm === "Thực tập" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("form", "Thực tập")}
              >
                Thực tập
              </li>
            </ul>
          </div>
          <div className="field">
            <div className="field__header">
              {MapPinBlue}
              <h3 className="field__title">Nơi làm việc</h3>
            </div>
            <ul className="field__list">
              <li
                className={`field__item ${
                  selectedPlace === "Cà Phê Vườn Đá" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("place", "Cà Phê Vườn Đá")}
              >
                Cà Phê Vườn Đá
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "NH Thủy Tạ Đầm Sen"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("place", "NH Thủy Tạ Đầm Sen")}
              >
                NH Thủy Tạ Đầm Sen
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "CVVH Đầm Sen" ? "field__item-active" : ""
                }`}
                onClick={() => handleFilterClick("place", "CVVH Đầm Sen")}
              >
                CVVH Đầm Sen
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "Khách sạn Ngọc Lan"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("place", "Khách sạn Ngọc Lan")}
              >
                Khách sạn Ngọc Lan
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "Khách sạn Phú Thọ"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("place", "Khách sạn Phú Thọ")}
              >
                Khách sạn Phú Thọ
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "KDL Sinh Thái Vàm Sát"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterClick("place", "KDL Sinh Thái Vàm Sát")
                }
              >
                KDL Sinh Thái Vàm Sát
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "Trung tâm DVDL Đầm Sen"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterClick("place", "Trung tâm DVDL Đầm Sen")
                }
              >
                Trungtâm DVDL Đầm Sen
              </li>
              <li
                className={`field__item ${
                  selectedPlace === "VP Phuthotourist"
                    ? "field__item-active"
                    : ""
                }`}
                onClick={() => handleFilterClick("place", "VP Phuthotourist")}
              >
                VP Phuthotourist
              </li>
            </ul>
          </div>
        </div>
        <div className="close-filter">
          <div
            className="close-filter-cancel close-filter-btn"
            onClick={() => {
              onResetFilters();
              setIsFilterVisible(false);
            }}
          >
            Hủy
          </div>
          <div
            className="close-filter-accept close-filter-btn"
            onClick={() => setIsFilterVisible(false)}
          >
            Xác nhận
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCareers;
