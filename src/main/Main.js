import React from 'react';
import './Main.css';
import PhotoBlock from './photo_block/PhotoBlock';
import ShortInfo from '../short_info/ShortInfo';

const Main = () => (
    <div className="main-body">
      <PhotoBlock />
      <ShortInfo />
    </div>
);

export default Main;
