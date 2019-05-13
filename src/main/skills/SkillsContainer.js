import React from 'react';
import './SkillsContainer.css';
import ProgressBar from './progress_bar/ProgressBar';

const progressBars = [
  {name: "CSS/HTML", percent: "74%"},
  {name: "JS", percent: "69%"},
  {name: "React", percent: "65%"},
  {name: "UE4 Blueprints", percent: "93%"},
]

const skillsContainer = () => (
  <div className="skills-container">
    <h3>Skills</h3>
    {progressBars.map(({name, percent}, index) => (
        <ProgressBar
          name={name}
          percent={percent}
          key={`${name}-${index}`}
        />
      ))
    }
  </div>
);

export default skillsContainer;
