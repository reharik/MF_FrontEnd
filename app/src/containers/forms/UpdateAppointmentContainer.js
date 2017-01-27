import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import UpdateAppointmentForm from '../../components/forms/UpdateAppointmentForm';
import { updateAppointment, fetchAppointmentAction } from './../../modules/appointmentModule';
import appointmentTypes from './../../constants/appointmentTypes';
import { generateAllTimes } from './../../utilities/appointmentTimes';
import { updateAppointmentModel } from './../../selectors/appointmentModelSelector';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;

const mapStateToProps = (state, props) => {
  const clients = state.clients.map(x=> ({ value:x.id , display: `${x.contact.lastName} ${x.contact.firstName}` }));
  // please put this shit in a config somewhere
  const times = generateAllTimes(15, 7, 7);
  return {
    model: updateAppointmentModel(state, props.args),
    clients,
    appointmentTypes,
    times,
    cancel: props.cancel
  }
};


export default connect(mapStateToProps,
  { updateAppointment,
    fetchAppointmentAction,
    notifClear}
  )(UpdateAppointmentForm);
