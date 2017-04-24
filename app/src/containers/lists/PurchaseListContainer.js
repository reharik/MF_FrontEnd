import {connect} from 'react-redux';
import PurchaseList from '../../components/lists/PurchaseList';
import CellLink from '../../components/GridElements/CellLink.js';

import { getPurchases } from './../../modules/purchaseModule';

const columns = () => [
   {
    property: ({column, row}) => {
      return CellLink('purchase')({value: `${row.createdDate}`, row})
    },
    sort:'createdDate',
    display: 'Created Date'
  },
  {
    property: 'total',
    display: 'Total'
  }
];

function mapStateToProps(state) {
  const gridConfig = {
    tableName: 'purchaseList',
    dataSource: 'purchase',
    fetchDataAction: getPurchases,
  };
  return {
    gridConfig,
    columns,
    purchase: state.purchase
  };
}

export default connect(mapStateToProps)(PurchaseList);
