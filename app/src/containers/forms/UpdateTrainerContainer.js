import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import UpdateTrainerForm from '../../components/forms/UpdateTrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { updateTrainerName, fetchTrainerAction, rollbackTrainerName } from './../../modules/trainerModule';

const mapStateToProps = (state, props) => {
  const trainer = state.trainers.filter(x=>x.id === props.params.trainerId)[0];
  const model = formJsonSchema(state.schema.definitions.trainer, trainer);
  console.log('==========model=========');
  console.log(model);
  console.log('==========END model=========');
  return {
    model,
    states
  }
};

export default connect(mapStateToProps, { updateTrainerName,
  rollbackTrainerName,
  fetchTrainerAction })(UpdateTrainerForm);
