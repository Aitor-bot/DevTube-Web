import React from "react";
import "./SearchBar.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="searchbar_container">
      <input
        className="searchbar_input"
        type="text"
        placeholder="Buscar..."
      />
      <button className="searchbar_button"><AiOutlineSearch size={30}/></button>
    </div>
  );
};

export default SearchBar;