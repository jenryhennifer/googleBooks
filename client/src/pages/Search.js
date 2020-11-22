import React, { Component } from 'react';

//components
// import SearchBar from '../components/SearchBar/SearchBar';
import BookList from '../components/BookLists/BookList';

class Search extends Component {
  render() {
    return (
      <div>
        {/* <SearchBar /> */}
        <BookList />

      </div>
    );
  }
}

export default Search;
