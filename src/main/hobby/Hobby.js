import React from 'react';
import './Hobby.css';

const hobby = ({icon, name}) => (
  <div className="hobby">
    <div className="border">
      <div className="hobby-icon">
        <i className={icon} aria-hidden="true" />
      </div>
    </div>
    <div className="hobby-text">
      {name}
    </div>
  </div>
);

export default hobby;
