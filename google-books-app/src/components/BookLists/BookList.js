import React from 'react';
import './style.css';

import BookCard from '../BookCard/BookCard'

function BookList(props) {
  return (
    <div className="container mt-3">
      <h4 className="float-left mb-4 mt-2">Results</h4>
      <BookCard/>
    </div>
  );
}

export default BookList;
