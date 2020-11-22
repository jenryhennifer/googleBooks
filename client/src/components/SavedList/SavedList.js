import React, { Component } from 'react';
import SavedCard from '../SavedCard/SavedCard';
import './style.css';
import API from '../../utils/API';

class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };
  }

  savedInfo = (info) => {
    console.log(info);

    const savedBook = info.map((stuff) => ({
      id: stuff.id,
      title: stuff.title,
      author: stuff.author,
      description: stuff.description,
      image: stuff.image,
      link: stuff.previewLink,
    }));
    this.setState({ saved: savedBook });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    API.getSaved()
      .then((res) => this.savedInfo(res))
      .then(console.log(this.state.saved));
  }

  handleDelete = (id) => {
    API.deleteBook(id)
    .then(() => this.fetchData())
    console.log(id)
  };

  render() {
    return (
      <div>
        <h5>Saved Books</h5>
        {this.state.saved.map((book) => (
          <SavedCard
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image}
            link={book.link}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default SavedList;
