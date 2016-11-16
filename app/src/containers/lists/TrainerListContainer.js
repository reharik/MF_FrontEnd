import {connect} from 'react-redux';
import TrainerList from '../../components/lists/TrainerList';
import CellLink from '../../components/GridElements/CellLink.js';
import EmailLink from '../../components/GridElements/EmailLink.js';

import { fetchTrainersAction } from './../../modules/trainerModule';

const columns = [
  {
    property: ({column, row}) => {
      return CellLink('trainer')({value: `${row.contact.firstName} ${row.contact.lastName}`, row})
    },
    display: 'Name',
    width: '10%',
  },
  {
    property: EmailLink,
    propertyName: 'contact.email',
    display: 'Email',
    width: '35%'
  },
  {
    property: 'id',
    hidden : true
  }
];


function mapStateToProps(state) {
  const gridConfig = {
    tableName: 'trainerList',
    dataSource: 'trainers',
    fetchDataAction: fetchTrainersAction,
  };
  return {
    gridConfig,
    columns,
    trainers: state.trainers

  };
}

export default connect(mapStateToProps)(TrainerList);

