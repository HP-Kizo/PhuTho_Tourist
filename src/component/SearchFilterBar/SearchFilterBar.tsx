import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./SearchFilterBar.css";
import {
  Activity,
  ArrowDownUp,
  CalendarIcon,
  Event,
  Folder,
  Introduce,
  News,
  Notification,
  Search,
  Topics,
  Vector,
} from "../../assets/Icon";
import { SearchFilterBarProps } from "../../typescripts/Interface";
import DateRangePicker from "../DateRangePicker/DateRangePicker";

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  sortBy,
  startDate,
  endDate,
  category,
  onSearchQueryChange,
  onSortByChange,
  onStartDateChange,
  onEndDateChange,
  setCategory,
}) => {
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearchQueryChange(value);
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches].slice(0, 5));
    }
  };

  const handleSortChange = () => {
    onSortByChange(sortBy === "A đến Z" ? "Z đến A" : "A đến Z");
  };

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleMenuChange = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Xử lý khi mở thanh Menu
  const searchRef = useRef<HTMLDivElement>(null);
  const scrollToSearch = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isFilterVisible) {
      scrollToSearch();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterVisible]);
  console.log(startDate, endDate);

  const handleDateChange = ({
    startDate,
    endDate,
  }: {
    startDate: Date;
    endDate: Date;
  }) => {
    onStartDateChange(format(startDate, "yyyy-MM-dd"));
    onEndDateChange(format(endDate, "yyyy-MM-dd"));
  };

  return (
    <div className="search-filter-bar" ref={searchRef}>
      <div className="search-filter__left">
        <div className="wrap__search">
          <div className="search__left">
            {Search}
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search__input"
            />
          </div>
        </div>
        {searchQuery && (
          <div className="search__dropdown">
            <p>Tìm kiếm gần đây</p>
            {recentSearches.map((search, index) => (
              <p key={index} onClick={() => onSearchQueryChange(search)}>
                {search}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="search-filter__right">
        <div className="date__picker">
          <DateRangePicker
            startDate={new Date(startDate)}
            endDate={new Date(endDate)}
            onDateChange={handleDateChange}
          />
        </div>
        <button className="search__soft" onClick={handleSortChange}>
          {ArrowDownUp}
          <p className="search__softOder">{sortBy}</p>
        </button>
        <button className="search__menu" onClick={handleMenuChange}>
          {Topics}
        </button>
        {isFilterVisible && (
          <div className="filter-menu">
            <div className="filter-menu__content">
              <div className="filter-menu__category">
                <h2 className="menu-category__header">Chủ đề bài viết</h2>
                <ul className="menu-category__nav">
                  <li
                    className={
                      category === "gioi-thieu"
                        ? "menu-category__item menu-category__active"
                        : "menu-category__item"
                    }
                    onClick={() => setCategory("gioi-thieu")}
                  >
                    <span className="menu-category__item-icon">
                      {Introduce}
                    </span>
                    <span className="menu-category__item-title">
                      Giới thiệu
                    </span>
                  </li>
                  <li
                    className={
                      category === "tin-tuc"
                        ? "menu-category__item menu-category__active"
                        : "menu-category__item"
                    }
                    onClick={() => setCategory("tin-tuc")}
                  >
                    <span className="menu-category__item-icon">{News}</span>
                    <span className="menu-category__item-title">Tin tức</span>
                  </li>
                  <li
                    className={
                      category === "su-kien"
                        ? "menu-category__item menu-category__active"
                        : "menu-category__item"
                    }
                    onClick={() => setCategory("su-kien")}
                  >
                    <span className="menu-category__item-icon">{Event}</span>
                    <span className="menu-category__item-title">Sự kiện</span>
                  </li>
                  <li
                    className={
                      category === "thong-bao"
                        ? "menu-category__item menu-category__active"
                        : "menu-category__item"
                    }
                    onClick={() => setCategory("thong-bao")}
                  >
                    <span className="menu-category__item-icon">
                      {Notification}
                    </span>
                    <span className="menu-category__item-title">Thông báo</span>
                  </li>
                  <li
                    className={
                      category === "tin-co-dong"
                        ? "menu-category__item menu-category__active"
                        : "menu-category__item"
                    }
                    onClick={() => setCategory("tin-co-dong")}
                  >
                    <span className="menu-category__item-icon">{Folder}</span>
                    <span className="menu-category__item-title">
                      Tin cổ đông
                    </span>
                  </li>
                  <li
                    className={
                      category === "hoat-dong-doan-the"
                        ? "menu-category__item menu-category__active"
                        : "menu-category__item"
                    }
                    onClick={() => setCategory("hoat-dong-doan-the")}
                  >
                    <span className="menu-category__item-icon">{Activity}</span>
                    <span className="menu-category__item-title">
                      Hoạt động đoàn thể
                    </span>
                  </li>
                </ul>
              </div>
              <div className="filter-menu__category">
                <h2 className="menu-category__header">Thời gian</h2>
              </div>
              <div className="menu-date__picker">
                <DateRangePicker
                  startDate={new Date(startDate)}
                  endDate={new Date(endDate)}
                  onDateChange={handleDateChange}
                />
              </div>
            </div>
            <div className="close-filter">
              <div
                className="close-filter-cancel close-filter-btn"
                onClick={() => {
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
        )}
      </div>
    </div>
  );
};

export default SearchFilterBar;
