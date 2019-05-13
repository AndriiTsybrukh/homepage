import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({name, percent}) => (
  <div className="pb-container">
    <h2>{name}</h2>
    <div className="pb-background">
      <div className="pb-progress"  style={{width: percent}} />
    </div>
  </div>
);

export default ProgressBar;
