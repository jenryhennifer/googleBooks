import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';

import BookCard from '../BookCard/BookCard';
import SearchBar from '../SearchBar/SearchBar';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
    };
  }

  changeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  bookInfo = (info) => {
    console.log(info.data.items);
    const result = info.data.items;

    const book = result.map((stuff) => ({
      id: stuff.id,
      title: stuff.volumeInfo.title,
      author: stuff.volumeInfo.authors && stuff.volumeInfo.authors[0],
      description: stuff.volumeInfo.description,
      image: stuff.volumeInfo.imageLinks && stuff.volumeInfo.imageLinks.smallThumbnail,
      link: stuff.volumeInfo.previewLink,
    }));
    this.setState({ books: book });
  };

  bookData = () => {
    const formattedString = this.state.search.replace(' ', '+');

    API.getBooks(formattedString)
      .then((res) => this.bookInfo(res))
      .then(console.log(this.state.search))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.search}
          changeSearch={this.changeSearch}
          fetchBooks={this.bookData}
        />
        <div className="container mt-3">
          <h4 className="mb-4 mt-2">Results</h4>
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
      </div>
    );
  }
}

export default BookList;
