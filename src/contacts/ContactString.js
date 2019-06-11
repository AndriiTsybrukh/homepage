import React from 'react';
import './ContactString.css';

const ContactString = ({ icon, text, link }) => (
  <div className="contact-string">
    <div className="contact-icon">
      <i className={icon} aria-hidden="true" />
    </div>
    <a target="_blanc" href={link}>
      <h4 className="contact-text">{text}</h4>
    </a>
  </div>
);

export default ContactString;
