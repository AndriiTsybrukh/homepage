import React from 'react';
import './ContentCard.css';
// import 'font-awesome/css/font-awesome.min.css';

const ContentCard = ({text, icon, component}) => (
  <div className="card-box">
    <div className="card-icon">
      <i className={icon} />
    </div>
    <div className="card-text">
      <h2>{text}</h2>
    </div>
    <div className="card-content">
      {component}
    </div>
 </div>
);

export default ContentCard;
