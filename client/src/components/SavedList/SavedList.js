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

  fetchData = async () => {
    const results = await API.getSaved();
    this.savedInfo(results);
  };

  handleDelete = (id) => {
    API.deleteBook(id);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <h5>Saved Books</h5>
        <div className="container">
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
      </div>
    );
  }
}

export default SavedList;
