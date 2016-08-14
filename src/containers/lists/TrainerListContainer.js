import {connect} from 'react-redux';
import {plugins, pageSize, height} from '../../utilities/gridDef.js';
import TrainerList from '../../components/lists/TrainerList';
import CellLink from '../../components/GridElements/CellLink.js';
import EmailLink from '../../components/GridElements/EmailLink.js';
import Promise from 'bluebird';
import uuid from 'uuid';

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
  return Promise.resolve({ok:true, data});
};

function mapStateToProps(state) {
  const gridConfig = {
    dataSource
  };
  return {
    gridConfig,
    columns
  };
}

export default connect(mapStateToProps)(TrainerList);

