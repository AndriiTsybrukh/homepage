import React from 'react';
import './ContactString.css';

const ContactString = ({icon, text}) => {
  return (
    <div className="contact-string">
      <div className="contact-icon">
        <i className={icon} aria-hidden="true" />
      </div>
      <h4 className="contact-text">{text}</h4>
    </div>
    );
}

export default ContactString;
