import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import UpdateTrainerForm from '../../components/forms/UpdateTrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { updateTrainerInfo,
  updateTrainerContact,
  updateTrainerAddress,
  updateTrainerPassword,
  updateTrainersClients,
  fetchTrainerAction } from './../../modules/trainerModule';
import { fetchClientsAction } from './../../modules/clientModule';

const mapStateToProps = (state, props) => {
  const trainer = state.trainers.filter(x=>x.id === props.params.trainerId)[0];
  const clients = state.clients.map(x=> ({ value:x.id , label: `${x.contact.lastName} ${x.contact.firstName}` }));
  const model = formJsonSchema(state.schema.definitions.trainer, trainer);
  model.confirmPassword = {...model.password};
  model.confirmPassword.name  = 'confirmPassword';
  model.confirmPassword.rules = [{rule:'equalTo', compareField:'password'}];
  return {
    model,
    states,
    clients
  }
};

export default connect(mapStateToProps, { updateTrainerInfo,
  updateTrainerContact,
  updateTrainerAddress,
  updateTrainerPassword,
  updateTrainersClients,
  fetchTrainerAction,
  fetchClientsAction})(UpdateTrainerForm);
