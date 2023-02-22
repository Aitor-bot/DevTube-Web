import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar_container">
      <input
        className="searchbar_input"
        type="text"
        placeholder="Buscar..."
      />
      <button className="searchbar_button">Buscar</button>
    </div>
  );
};

export default SearchBar;