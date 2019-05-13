import React from 'react';
import LanguageItem from '../languages/LanguageItem';
import './Languages.css';

const languagesList = ["Ukrainian - Native", "Russian - Intermediate", "English - Intermediate"];

const Languages = () => (
  <div className="languages-container">
    {languagesList.map((item, index) => (
        <LanguageItem text={item} key={`${item}+${index} `}/>
      ))
    }
  </div>
);

export default Languages;
