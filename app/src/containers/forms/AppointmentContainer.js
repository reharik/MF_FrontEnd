import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import AppointmentForm from '../../components/forms/AppointmentForm';
import { scheduleAppointment } from './../../modules/appointmentModule';
import appointmentTypes from './../../constants/appointmentTypes';
import { generateAllTimes } from './../../utilities/appointmentTimes';
import { appointmentModel } from './../../selectors/appointmentModelSelector';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;

const mapStateToProps = (state, ownProps) => {
  const clients = state.clients.map(x=> ({ value:x.id , display: `${x.contact.lastName} ${x.contact.firstName}` }));
  // please put this shit in a config somewhere
  const times = generateAllTimes(15, 7, 7);

  const props = {
    model: appointmentModel(state, ownProps.args),
    clients,
    appointmentTypes,
    times,
    cancel: ownProps.cancel,
    isAdmin: state.auth.user.role === 'admin'
  };
  if(props.isAdmin){
    props.trainers = state.trainers.map(x=> ({ value:x.id , display: `${x.contact.lastName} ${x.contact.firstName}` }));
  }  
  return props
};

export default connect(mapStateToProps,
  { scheduleAppointment,
    notifClear}
  )(AppointmentForm);
