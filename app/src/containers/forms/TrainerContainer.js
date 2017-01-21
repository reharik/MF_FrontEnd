import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import TrainerForm from '../../components/forms/TrainerForm';
import {Form} from 'freakin-react-forms';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { hireTrainer, fetchTrainerAction } from './../../modules/trainerModule';
import { fetchClientsAction } from './../../modules/clientModule';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;
import uuid from 'uuid';

const mapStateToProps = (state, props) => {
  const clients = state.clients.map(x=> ({ value:x.id , label: `${x.contact.lastName} ${x.contact.firstName}` }));
  const jsonModel = formJsonSchema(state.schema.definitions.trainer);
  jsonModel.confirmPassword = {...jsonModel.password};
  jsonModel.confirmPassword.name  = 'confirmPassword';
  jsonModel.confirmPassword.rules = [{rule:'equalTo', compareField:'password'}];
  const model = Form.buildModel('trainerForm', jsonModel);

  return {
    model,
    states,
    clients
  }
};

export default connect(mapStateToProps, { hireTrainer,
  fetchTrainerAction,
  fetchClientsAction,
  notifClear})(TrainerForm);
