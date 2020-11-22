import React, { Component } from 'react';
import SavedCard from '../SavedCard/SavedCard';
import './style.css';

class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };
  }
  render() {
    return (
      <div>
        <h5>Saved Books</h5>
        <SavedCard />
      </div>
    );
  }
}

export default SavedList;
