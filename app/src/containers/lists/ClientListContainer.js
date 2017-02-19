import {connect} from 'react-redux';
import ClientList from '../../components/lists/ClientList';
import CellLink from '../../components/GridElements/CellLink.js';
import EmailLink from '../../components/GridElements/EmailLink.js';
import ActionLink from '../../components/GridElements/ActionLink.js';

import { fetchAllClientsAction, archiveClient } from './../../modules/clientModule';

const columns = (archiveClient) => [
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
    property: ({column, row}) => {
      return ActionLink(archiveClient)({value: `${row.archived}`, row})
    },
    sort:'Archived',
    display: 'Archived',
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
    fetchDataAction: fetchAllClientsAction,
  };
  return {
    gridConfig,
    columns,
    clients: state.clients

  };
}

export default connect(mapStateToProps, {archiveClient})(ClientList);

