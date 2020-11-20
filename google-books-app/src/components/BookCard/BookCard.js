import React from 'react';

function BookCard(props) {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
          <p className="card-text">
                {props.description}
          </p>
          <button className="btn">
            View
          </button>
          <button className="btn">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
