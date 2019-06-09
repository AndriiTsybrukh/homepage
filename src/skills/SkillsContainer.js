import React from 'react';
import './SkillsContainer.css';
import ProgressBar from './progress_bar/ProgressBar';

const progressBars = [
  {name: "CSS/HTML", percent: "70%"},
  {name: "JS", percent: "59%"},
  {name: "React", percent: "66%"},
  {name: "UE4 Blueprints", percent: "87%"},
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
