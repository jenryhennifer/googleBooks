import React, { Component, useEffect, useState } from 'react';
import './style.css';
import API from '../../utils/API';

import BookCard from '../BookCard/BookCard';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
    };
  }

  bookInfo = (info) => {
    console.log(info.data.items);
    const result = info.data.items;

    const book = result.map((stuff) => ({
      id: stuff.id,
      title: stuff.volumeInfo.title,
      author: stuff.volumeInfo.authors,
      description: stuff.volumeInfo.description,
      image: stuff.volumeInfo.imageLinks.thumbnail,
      link: stuff.volumeInfo.previewLink,
    }));
    this.setState({ books: book });

    console.log(this.state.books);
  };

  componentDidMount() {
    console.log('MOUNTED!');
    this.bookData('food');
  }

  bookData = (query) => {
    API.getBooks(query)
      .then((res) => this.bookInfo(res))
      .then(console.log(this.state.books))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container mt-3">
        <h4 className="float-left mb-4 mt-2">Results</h4>
        <div className="container">
          {this.state.books.map((book) => (
            <BookCard
              id={book.id}
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
              link={book.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
