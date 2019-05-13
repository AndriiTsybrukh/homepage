import React from 'react';
import './ShortInfo.css';
import Contacts from '../contacts/Contacts';
import Hobby from '../hobby/HobbiesContainer';
import Skills from '../skills/SkillsContainer';

const ShortInfo = () => (
  <div className="info-container">
    <Contacts />
    <Hobby />
    <Skills />
  </div>
);

export default ShortInfo;
