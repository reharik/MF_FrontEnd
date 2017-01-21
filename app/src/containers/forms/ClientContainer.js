import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import ClientForm from '../../components/forms/ClientForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { addClient, fetchClientAction } from './../../modules/clientModule';

const mapStateToProps = (state, props) => {
  const model = formJsonSchema(state.schema.definitions.client);
  return {
    model,
    states
  }
};

export default connect(mapStateToProps, { addClient, fetchClientAction })(ClientForm);
