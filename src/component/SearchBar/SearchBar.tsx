import React from "react";
import "./SearchBar.css";
import { IconX, Search } from "../../assets/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar: React.FC = () => {
  return (
    <div className="searchBar">
      <div>
        {Search}
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="searchBar__input"
        />
      </div>
      <span>{IconX}</span>
    </div>
  );
};

export default SearchBar;
