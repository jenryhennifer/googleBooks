import React from 'react';

function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Google Books
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/search">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">
            Save
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
