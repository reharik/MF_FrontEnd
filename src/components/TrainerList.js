import React from 'react';
import ContentHeader from './ContentHeader';
import ContentHeaderSearch from './ContentHeaderSearch';
import {Table}  from 'redux-datatable'

console.log('==========Table=========');
console.log(Table);
console.log('==========END Table=========');

const TrainerList = ({ gridConfig }) => {
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
            <ContentHeaderSearch />
          </div>
        </div>
      </ContentHeader>
      <div className="form-scroll-inner" >
        <div className="content-inner">
          <Table columns={gridConfig.columns} />
        </div>
      </div>
    </div>);
};

TrainerList.contextTypes = {
    gridConfig: React.PropTypes.object
};

export default TrainerList;
