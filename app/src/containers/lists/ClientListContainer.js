import {connect} from 'react-redux';
import ClientList from '../../components/lists/ClientList';
import CellLink from '../../components/GridElements/CellLink.js';
import EmailLink from '../../components/GridElements/EmailLink.js';

import { fetchClientsAction } from './../../modules/clientModule';

const columns = [
  {
    property: ({column, row}) => {
      return CellLink('client')({value: `${row.contact.lastName}`, row})
    },
    sort:'lastName',
    display: 'Last Name',
    width: '10%',
  },
  {
    property: 'contact.firstName',
    display: 'First Name',
    width: '10%',
  },
  {
    property: EmailLink,
    propertyName: 'contact.email',
    display: 'Email',
    width: '35%'
  },
  {
    property: 'contact.mobilePhone',
    display: 'Mobile Phone',
    width: '10%',
  },
  {
    property: 'id',
    hidden : true
  }
];


function mapStateToProps(state) {
  const gridConfig = {
    tableName: 'clientList',
    dataSource: 'clients',
    fetchDataAction: fetchClientsAction,
  };
  return {
    gridConfig,
    columns,
    clients: state.clients

  };
}

export default connect(mapStateToProps)(ClientList);

