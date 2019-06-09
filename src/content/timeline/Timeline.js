import React from 'react';
import './Timeline.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const timelineData = [
  {date: "15.08.2017", title: "Liberty English School", subtitle: "Upgrading skill of my English"},
  {date: "01.09.2016", title: "End college and became a student of the Lviv Polytechnic", subtitle: "First diploma!"},
  {date: "08.06.2015", title: "First work with Unreal Engine 4"},
  {date: "03.09.2012", title: "Became a student of the Technology College"},
  {date: "01.09.2011", title: "The first step to programming", subtitle: "Learning in the IT STEP"},
  {date: "19.05.1997", title: "Born in Lviv, UA"},
];

const FillTimeline = () => (
  <div className="card-content">
    <Timeline lineColor={'#ddd'}>
      {timelineData.map((item, index) => (
          <TimelineItem
            key = {`${index}-key`}
            dateText={item.date}
            style={{ color: '#42B2C8' }}
            dateInnerStyle={{ background: '#42B2C8' }}
          >
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
          </TimelineItem>
        ))
      }
    </Timeline>
  </div>
);

export default FillTimeline;
