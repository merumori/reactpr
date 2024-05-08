import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default Card;