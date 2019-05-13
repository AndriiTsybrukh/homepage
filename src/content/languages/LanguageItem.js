import React from 'react';
import './LanguageItem.css';

const LanguageItem = ({text}) => (
  <div className="language-item">
    <div className="language-text">
      {text}
    </div>
  </div>
);

export default LanguageItem;
