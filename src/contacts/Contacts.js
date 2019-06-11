import React from 'react';
import './Contacts.css';
import ContactString from './ContactString';

const contactsContainer = [
  {
    icon: "fas fa-phone-square",
    text: "+380634098469"
  },
  {
    icon: "fab fa-linkedin",
    text: "Andrii Tsybrukh",
    link: "https://www.linkedin.com/in/andrii-tsybrukh-28156a178/"
  },
  {
    icon: "fab fa-instagram",
    text: "andrii_tsybrukh"
  },
  {
    icon: "fab fa-facebook-square",
    text: "andrii.tsybrukh",
    link: "https://www.facebook.com/andrii.tsybrukh"
  },
  {
    icon: "fas fa-envelope-square",
    text: "newsensys@gmail.com",
    link: "mailto:newsensys@gmail.com"
  }
];

const Contacts = () => (
  <div className="contacts">
    <h3>Contacts</h3>
    <div className="contacts-container">
      {contactsContainer.map((props, index) => (
        <ContactString
          icon={props.icon}
          text={props.text}
          link={props.link}
          key={`${props.text}-${index}`}
        />
      ))}
    </div>
  </div>
);

export default Contacts;
