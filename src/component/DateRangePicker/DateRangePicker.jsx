import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { ArroowRight, CalendarIcon } from "../../assets/Icon";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
import "./DateRangePicker.css"; // Import the custom CSS file

const DateRangePicker = ({ startDate, endDate, onDateChange }) => {
  const [selectedDateType, setSelectedDateType] = useState("startDate");
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    if (selectedDateType === "startDate") {
      onDateChange({ startDate: date, endDate });
    } else {
      onDateChange({ startDate, endDate: date });
    }
    setOpen(false);
  };

  const toggleCalendar = (dateType) => {
    setSelectedDateType(dateType);
    setOpen(!open);
  };

  return (
    <div className="date-picker-component">
      <div className="date-picker__datePicker">
        <div
          className="date-picker__datePicker-left"
          onClick={() => toggleCalendar("startDate")}
        >
          <input
            type="text"
            value={format(startDate, "dd/MM/yyyy")}
            className={open ? "date-input date-input__active" : "date-input"}
          />
          {CalendarIcon}
        </div>
        <div>{ArroowRight}</div>
        <div
          className="date-picker__datePicker-right"
          onClick={() => toggleCalendar("endDate")}
        >
          <input
            type="text"
            value={format(endDate, "dd/MM/yyyy")}
            className={open ? "date-input date-input__active" : "date-input"}
          />
          {CalendarIcon}
        </div>
      </div>
      {open && (
        <Calendar
          date={selectedDateType === "startDate" ? startDate : endDate}
          onChange={handleDateChange}
          className="calendar-element"
        />
      )}
    </div>
  );
};

export default DateRangePicker;
