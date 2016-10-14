import React from 'react';
import ContentHeader from '../ContentHeader';
import ContentHeaderSearch from '../ContentHeaderSearch';
import {Table}  from 'redux-datatable'
import {Link} from 'react-router';


const TrainerList = ({ gridConfig, columns }) => {
  return (
    <div id='trainerList'>
      <ContentHeader >
        <div className="trainerList__header">
          <div className="trainerList__header__left" >
            <Link to='trainer'><button className="contentHeader__button__new" title="New" /></Link>
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
          <Table columns={columns} config={gridConfig} />
        </div>
      </div>
    </div>);
};

TrainerList.contextTypes = {
    gridConfig: React.PropTypes.object
};

export default TrainerList;
