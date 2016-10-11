import React from 'react';
import ContentHeader from './ContentHeader';
import {Calendar} from 'redux-task-calendar'

const TrainerList = ({ config }) => {
  return (
    <div id='trainerList'>
      <ContentHeader >
        <div className="trainerList__header">
          <div className="trainerList__header__left" >
            <button className="contentHeader__button__new" title="New" />
          </div>
          <div className="trainerList__header__center">
            <div className="trainerList__header__center__title">Trainers</div>
          </div>
          <div className="trainerList__header__right" >
          </div>
        </div>
      </ContentHeader>
      <div className="form-scroll-inner" >
        <div className="content-inner">
          <Calendar config={config} />
        </div>
      </div>
    </div>);
};

TrainerList.contextTypes = {
  gridConfig: React.PropTypes.object
};

export default TrainerList;
