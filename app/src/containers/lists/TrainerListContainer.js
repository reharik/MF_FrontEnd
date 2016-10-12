import configValues from './../../utilities/configValues';
import {connect} from 'react-redux';
import {plugins, pageSize, height} from '../../utilities/gridDef.js';
import TrainerList from '../../components/lists/TrainerList';
import CellLink from '../../components/GridElements/CellLink.js';
import EmailLink from '../../components/GridElements/EmailLink.js';
import Promise from 'bluebird';
import uuid from 'uuid';

import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE }  from 'redux-datatable';
import { CALL_API } from 'redux-api-middleware';
const data = [
  {
    name: 'Michael Jordan',
    position: 'Shooting Guard',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  },
  {
    name: 'Charles Barkley',
    position: 'Power Forward',
    id:uuid.v4()
  }

];

const columns = [
  {
    property: 'name',
    display: 'Name',
    width: '10%',
    format: CellLink('trainer')
  },
  {
    property: 'position',
    display: 'Position',
    width: '35%',
    format: EmailLink
  },
  {
    property: 'id',
    hidden : true
  }
];



const dataSource = function() {
return {
  [CALL_API]: {
    endpoint: configValues.apiBase + 'trainers',
    method: 'GET',
    credentials: 'same-origin',
    types: [DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE]
  }
};


  // return Promise.resolve({ok:true, data});
};

function mapStateToProps(state) {
  const gridConfig = {
    dispatchDataSource:dataSource
  };
  return {
    gridConfig,
    columns
  };
}

export default connect(mapStateToProps)(TrainerList);

