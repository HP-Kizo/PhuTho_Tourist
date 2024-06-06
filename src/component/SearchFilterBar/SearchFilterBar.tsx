import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./SearchFilterBar.css";
import {
  ArrowDownUp,
  Calendar,
  Search,
  Topics,
  Vector,
} from "../../assets/Icon";
import { SearchFilterBarProps } from "../../typescripts/Interface";

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  sortBy,
  startDate,
  endDate,
  onSearchQueryChange,
  onSortByChange,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  interface DateSelection {
    startDate: Date;
    endDate: Date;
    key: string;
  }
  const [date, setDate] = useState<DateSelection[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearchQueryChange(value);
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches].slice(0, 5));
    }
  };

  const handleMenuChange = () => {
    setOpenMenu(!openMenu);
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

  return (
    <div className="search-filter-bar">
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
          <div
            className="headerSearchItem"
            onClick={() => setOpenDate(!openDate)}
          >
            <span className="headerSearchText">{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} `}</span>
            {Calendar}
          </div>
          {Vector}
          <div
            className="headerSearchItem"
            onClick={() => setOpenDate(!openDate)}
          >
            <span className="headerSearchText">{`${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )} `}</span>
            {Calendar}
          </div>
        </div>
        <button className="search__soft" onClick={handleSortChange}>
          {ArrowDownUp}
          <p className="search__softOder">{sortBy}</p>
        </button>
        <button className="search__menu" onClick={handleMenuChange}>
          {Topics}
        </button>
        {openMenu && (
          <div className="filter-menu">
            <p>Giới thiệu</p>
            <p>Tin tức</p>
            <p>Sự kiện</p>
            <p>Thông báo</p>
            <p>Tin cổ đông</p>
            <p>Hoạt động đoàn thể</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilterBar;
