import React from 'react';
import './PhotoBlock.css';
import Photo from '../../images/photo.png';

const photoBlock = () => (
  <div className="photo-container">
    <img
      className="photo"
      src={Photo}
      alt="user"
    />
    <h2 className="name">Tsybrukh Andrii</h2>
    <h4 className="position">Front-End Developer</h4>
  </div>
);

export default photoBlock;
