import React from 'react';
import ContentHeader from './ContentHeader';
import {Calendar} from 'redux-task-calendar'

const MFCalendar = ({ config, actions }) => {
  return (
    <div id='mainCalendar'>
      <ContentHeader >
        <div className="mainCalendar__header">
          <div className="mainCalendar__header__left" >
          </div>
          <div className="mainCalendar__header__center">
          </div>
          <div className="mainCalendar__header__right" >
          </div>
        </div>
      </ContentHeader>
      <div className="form-scroll-inner" >
        <div className="content-inner">
          <Calendar config={config} actions={actions} />
        </div>
      </div>
    </div>);
};

MFCalendar.contextTypes = {
  gridConfig: React.PropTypes.object
};

export default MFCalendar;
