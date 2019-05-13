import React from 'react';
import './Main.css';
import PhotoBlock from './photo_block/PhotoBlock';
import ShortInfo from './short_info/ShortInfo';
import AdvancedInfo from './advanced_info/AdvancedInfo'

const Main = () => (
    <div className="main-body">
      <PhotoBlock />
      <ShortInfo />
      <AdvancedInfo /> 
    </div>
);

export default Main;
