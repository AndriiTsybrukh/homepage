import React from 'react';
import './HobbiesContainer.css';
import HobbyElement from './Hobby';

const hobbiesList = [
  {icon: "fas fa-plane-departure", name: "Travel"},
  {icon: "fas fa-guitar fa-lg", name: "Guitar"},
  {icon: "fas fa-fist-raised fa-lg", name: "MMA"},
]


const Hobby = () => (
  <div className="hobby-box">
    <h3>Hobby</h3>
    <div className="hobby-container">
      {hobbiesList.map(({icon, name}, index) => (
          <HobbyElement
            icon={icon}
            name={name}
            key = {`${name} + ${index}`}
          />
        ))
      }
    </div>
  </div>
);

export default Hobby;
