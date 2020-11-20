import React, { Component } from 'react';
import API from '../utils/API'

//components
import SearchBar from '../components/SearchBar/SearchBar';
import BookList from '../components/BookLists/BookList';

class Search extends Component {
    state ={
        search: "",
        results: []
    };

    componentDidMount(){
        console.log('MOUNTED!')
        this.getBooks('You')
    }

  render() {
    return (
      <div>
        <SearchBar />
        <BookList/>
      </div>
    );
  }
}

export default Search;
