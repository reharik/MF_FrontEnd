import { Grid } from 'react-redux-grid'
import {plugins, pageSize, height} from './../utilities/gridDef.js';
import React from 'react';
import CellLink from './GridElements/CellLink.js';
import EmailLink from './GridElements/EmailLink.js';
import ContentHeader from './ContentHeader';
import ContentHeaderSearch from './ContentHeaderSearch';

const data = [
    {
        name: 'Michael Jordan',
        position: 'Shooting Guard',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward',
        Id:1
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    },
    {
        name: 'Charles Barkley',
        position: 'Power Forward'
    }
];

const columns = [
    {
        name: 'Name',
        dataIndex: 'name',
        width: '10%',
        className: 'additional-class',
        renderer: CellLink('trainer')
    },
    {
        name: 'Position',
        dataIndex: 'position',
        width: '35%',
        className: 'additional-class',
        renderer: EmailLink
    },
    {
        name: 'id',
        dataIndex: 'Id',
        hidden : true
    }
];

const gridData = {
    columns,
    plugins,
    data,
  stateKey:'fu'
};

const grid =  (props, {store}) => {
  gridData.store = store;
  return (
    <div id='trainerList'>
      <ContentHeader >
        <div className="trainerList__header">
          <div className="trainerList__header__left" >
            <button className="contentHeader__button__new" title="New"></button>
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
          <Grid { ...gridData } />
        </div>
      </div>
    </div>);
};

grid.contextTypes = {
    store: React.PropTypes.object
};

export default grid;
