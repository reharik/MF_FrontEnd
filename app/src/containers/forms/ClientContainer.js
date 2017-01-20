import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import ClientForm from '../../components/forms/ClientForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { addClient, fetchClientAction } from './../../modules/clientModule';

const mapStateToProps = (state, props) => {
  const client = state.clients.filter(x=>x.id === props.params.clientId)[0];
  const model = formJsonSchema(state.schema.definitions.client, client);
  return {
    model,
    states
  }
};

export default connect(mapStateToProps, { addClient, fetchClientAction })(ClientForm);
