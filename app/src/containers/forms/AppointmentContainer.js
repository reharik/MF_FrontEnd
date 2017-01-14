import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import AppointmentForm from '../../components/forms/AppointmentForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { scheduleAppointment, fetchAppointmentAction } from './../../modules/appointmentModule';
import appointmentTypes from './../../constants/appointmentTypes';
import { generateAllTimes } from './../../utilities/appointmentTimes'; 
import moment from 'moment';
import { fetchClientsAction } from './../../modules/clientModule';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;

const mapStateToProps = (state, props) => {

  const appointment = state.appointments.filter(x=>x.id === props.apptId)[0];
  const model = formJsonSchema(state.schema.definitions.appointment, appointment);
  model.date.value = model.date.value || moment().toISOString();
  const clients = state.clients.map(x=> `${x.contact.lastName}, ${x.contact.firstName}`);
  const times = generateAllTimes(30);

  return {
    model,
    clients,
    appointmentTypes,
    times,
    cancel: props.cancel
  }
};

export default connect(mapStateToProps, 
  { scheduleAppointment, 
    fetchAppointmentAction,  
    fetchClientsAction,
    notifClear}
  )(AppointmentForm);
