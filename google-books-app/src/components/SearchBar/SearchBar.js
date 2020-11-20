import React from 'react';
import './style.css'

function SearchBar() {
  return (
    <div className='container'>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
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
