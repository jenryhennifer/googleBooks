import React from 'react';
import './style.css'

function SearchBar({search, changeSearch}) {
  console.log(search)

  return (
    <div className='container' id='search'>
      <h4 className='float-left mb-4 mt-2'>Book Search</h4>
    <div className="input-group mb-3 mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={changeSearch}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
    </div>
  );
}
export default SearchBar;
