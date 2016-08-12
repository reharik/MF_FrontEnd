import {connect} from 'react-redux';
import {plugins, pageSize, height} from './../utilities/gridDef.js';
import TrainerList from '../components/TrainerList';
import CellLink from './../components/GridElements/CellLink.js';
import EmailLink from './../components/GridElements/EmailLink.js';

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
    property: 'Name',
    width: '10%',
    format: CellLink('trainer')
  },
  {
    property: 'Position',
    width: '35%',
    format: EmailLink
  },
  {
    property: 'id',
    hidden : true
  }
];

function mapStateToProps(state) {
  const gridConfig = {
    columns,
    plugins,
    data,
    stateKey:'trainerList'
  };

  return {
    gridConfig
  };
}

export default connect(mapStateToProps)(TrainerList);

