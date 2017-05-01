import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import PurchaseForm from '../../components/forms/PurchaseForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { purchase } from './../../modules/purchaseModule';
import { notifications }  from './../../modules/notificationModule';
import {fetchClientAction } from './../../modules/clientModule'

const mapStateToProps = (state, props) => {
  const model = formJsonSchema(state.schema.definitions.purchase);
  model.clientId.value = props.params.clientId;
  let client = state.clients.find(x=>x.id === props.params.clientId) || {contact:{}};
console.log('==========client=========');
  console.log(client);
  console.log(client.inventory);
console.log('==========END client=========');

   const invModel = {
     fullHour: {
       name: 'fullHour',
       type: 'number',
       value: client.inventory.fullHours || 0,
       label: 'Full Hour'
     },
     halfHour: {
       name: 'halfHour',
       type: 'number',
       value: client.inventory.halfHours || 0,
       label: 'Half Hour'
     },
     pair: {
       name: 'pair',
       type: 'number',
       value: client.inventory.pairs || 0,
       label: 'Pair'
     }
   };
  return {
    model,
    invModel,
    client: client
  }
};

export default connect(mapStateToProps, { purchase,
  notifications,
  fetchClientAction})(PurchaseForm);
