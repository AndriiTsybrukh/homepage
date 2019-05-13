import React from 'react';
import './Contacts.css';
import ContactString from './ContactString';

const contactsContainer = [
  {icon: "fas fa-phone-square", text: "+380634098469"},
  {icon: "fab fa-linkedin", text: "andrii-tsybrukh"},
  {icon: "fab fa-instagram", text: "andrii_tsybrukh"},
  {icon: "fab fa-facebook-square", text: "andrii.tsybrukh"}
];

const Contacts = () => (
  <div className="contacts">
    <h3>Contacts</h3>
    <div className="contacts-container">
      {contactsContainer.map((props, index) => (
          <ContactString
            icon={props.icon}
            text={props.text}
            key = {`${props.text}-${index}`}
         />
      ))}
    </div>
  </div>
);

export default Contacts;
