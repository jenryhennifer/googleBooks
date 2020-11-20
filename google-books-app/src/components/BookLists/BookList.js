import React, { useEffect, useState } from 'react';
import './style.css';

import BookCard from '../BookCard/BookCard';

function BookList(props) {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=hunger'
    );
    console.log(response)
    const books = await response.json();
    setBooks(books);
  }


  return (
    <div className="container mt-3">
      <h4 className="float-left mb-4 mt-2">Results</h4>
      {/* {books.map((book) => (
        <BookCard/>
      ))} */}
    </div>
  );
}

export default BookList;
