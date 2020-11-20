import React from 'react';

function BookCard() {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{/*BOOK TITLE HERE*/}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{/*BOOK AUTHOR HERE*/}</h6>
          <p className="card-text">
                {/* PUT INPUT HERE */}
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
