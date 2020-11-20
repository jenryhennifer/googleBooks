import React from 'react';

function Navbar() {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Google Books
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Search
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Save
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
