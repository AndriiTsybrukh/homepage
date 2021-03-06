import React from 'react';
import './AdvancedInfo.css';
import ContentCard from '../content/ContentCard';
import Description from '../content/description/Description';
import Languages from '../content/languages/Languages';
import Timeline from '../content/timeline/Timeline';


const AdvancedInfo = () => (
  <div className="advanced-info-container">
    <ContentCard icon="fa fa-user fa-2x" text="About Me" component={<Description />}/>
    <ContentCard icon="fa fa-list-alt fa-2x" text="Timeline" component={<Timeline />} />
    <ContentCard icon="fas fa-language fa-2x" text="Languages" component={<Languages />} />
  </div>
);

export default AdvancedInfo;
