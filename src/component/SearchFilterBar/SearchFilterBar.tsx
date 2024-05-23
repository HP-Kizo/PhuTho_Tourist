// src/SearchFilterBar.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./SearchFilterBar.css";
import { ArrowDownUp, Calendar, Search, Vector } from "../../assets/Icon";
// interface SearchFilterBarProps {
//   onSearch: (query: string) => void;
//   onDateChange: (startDate: Date | null, endDate: Date | null) => void;
//   onSortChange: (sortOrder: string) => void;
// }

const SearchFilterBar: React.FC = (
  {
    // onSearch,
    // onDateChange,
    // onSortChange,
  }
) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("A đến Z");
  const [openDate, setOpenDate] = useState<boolean>(false);
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
  // const handleSelect = (ranges: RangeKeyDict) => {
  //   const selectedRange = ranges.selection;
  //   setDate([selectedRange]);
  // };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    // onSearch(event.target.value);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    // onDateChange(date, endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    // onDateChange(startDate, date);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === "A đến Z" ? "Z đến A" : "A đến Z");
    // onSortChange(event.target.value);
  };

  return (
    <div className="search-filter-bar">
      <div className="search-filter__left">
        <div className=" wrap__search">
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
          {/* <p className="search__right">x</p> */}
        </div>
        {/* <div className="search__dropdown">
          <p>Tìm kiếm gần đây</p>
        </div> */}
      </div>
      <div className="search-filter__right">
        <div className="date__picker">
          <div
            className="headerSearchItem"
            onClick={() => setOpenDate(!openDate)}
          >
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
            {Calendar}
            {/* {openDate && (
              <DateRangePicker
                editableDateInputs={true}
                // onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )} */}
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
            {/* {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )} */}
          </div>
        </div>
        <button
          className="search__soft"
          value={sortOrder}
          onClick={handleSortChange}
        >
          {ArrowDownUp}
          <p>{sortOrder}</p>
        </button>
      </div>
      {/* <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        placeholderText="End Date"
      /> */}
    </div>
  );
};

export default SearchFilterBar;
