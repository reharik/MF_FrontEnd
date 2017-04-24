import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import PurchaseSessionForm from '../../components/forms/PurchaseSessionForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { purchaseSessions } from './../../modules/purchaseSessionModule';
import { notifications }  from './../../modules/notificationModule';
import {fetchClientAction } from './../../modules/clientModule'

const mapStateToProps = (state, props) => {
  const model = formJsonSchema(state.schema.definitions.purchaseSession);
  let client = state.clients.find(x=>x.id === props.params.clientId) || {contact:{}};

   const invModel = {
     fullHour: {
       name: 'fullHour',
       type: 'number',
       value: '2',
       label: 'Full Hour'
     },
     halfHour: {
       name: 'halfHour',
       type: 'number',
       value: '2',
       label: 'Half Hour'
     },
     pair: {
       name: 'pair',
       type: 'number',
       value: '2',
       label: 'Pair'
     }
   };
  return {
    model,
    invModel,
    client: client
  }
};

export default connect(mapStateToProps, { purchaseSessions,
  notifications,
  fetchClientAction})(PurchaseSessionForm);
