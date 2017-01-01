import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import UpdateClientForm from '../../components/forms/UpdateClientForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { updateClientInfo,
  updateClientAddress,
  updateClientContact, 
  fetchClientAction } from './../../modules/clientModule';

const mapStateToProps = (state, props) => {
  const client = state.clients.filter(x=>x.id === props.params.clientId)[0];
  const model = formJsonSchema(state.schema.definitions.client, client);
  return {
    model,
    states
  }
};

export default connect(mapStateToProps, { updateClientInfo,
  updateClientAddress,
  updateClientContact,
  fetchClientAction })(UpdateClientForm);
