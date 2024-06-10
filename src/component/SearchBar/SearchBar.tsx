import React from "react";
import "./SearchBar.css";
import { IconX, Search } from "../../assets/Icon";

interface SearchBarProps {
  searchKeyword: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchKeyword,
  onSearchChange,
}) => {
  return (
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
      <span
        onClick={() =>
          onSearchChange({
            target: { value: "" },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      >
        {IconX}
      </span>
    </div>
  );
};

export default SearchBar;
