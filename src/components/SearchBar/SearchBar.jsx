import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => {
  return (
    <div className="app__searchbar app__flex">
      <form onSubmit={formSubmit}>
        <input
          className="p-text"
          type="text"
          value={value}
          placeholder="Search by category"
          onChange={handleSearchKey}
        />
        {
          <span className="bold-text" onClick={clearSearch}>
            X
          </span>
        }
        <button className="primary_button">Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
