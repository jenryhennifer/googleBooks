import React, { Component } from 'react';
import API from '../utils/API';

//components
import SearchBar from '../components/SearchBar/SearchBar';
import BookList from '../components/BookLists/BookList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
    };
  }

  bookInfo = info => {
    console.log(info.data.items)
    const result = info.data.items
    
    result.map(stuff => {
        this.setState({ books: {
            id: stuff.id,
            title: stuff.volumeInfo.title,
            author: stuff.volumeInfo.authors,
            description: stuff.volumeInfo.description,
            image: stuff.volumeInfo.imageLinks.thumbnail,
            link: stuff.volumeInfo.previewLink,
          }});
    })
    console.log(this.state.books)

  };

  componentDidMount() {
    console.log('MOUNTED!');
    this.bookData('food');
  }

  bookData = (query) => {
    API.getBooks(query)
      .then((res) =>
        this.bookInfo(res)
      )
      .then(console.log(this.state.books))
      .catch((err) => console.log(err));

  };


  render() {
    return (
      <div>
        <SearchBar />
        <BookList />
      </div>
    );
  }
}

export default Search;
