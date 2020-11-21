import React from 'react';
import './style.css';

function BookCard(props) {
  return (
    <div className="wrapper">
      <img alt={props.title} src={props.image} />
      <div className="card" id={props.id}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
          <p className="card-text">{props.description}</p>
          <a className="btn" href={props.link}>
            View
          </a>
          <button className="btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
