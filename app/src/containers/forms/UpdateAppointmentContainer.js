import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import UpdateAppointmentForm from '../../components/forms/UpdateAppointmentForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { updateAppointment, fetchAppointmentAction } from './../../modules/appointmentModule';
import appointmentTypes from './../../constants/appointmentTypes';
import { generateAllTimes } from './../../utilities/appointmentTimes';
import moment from 'moment';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;

const mapStateToProps = (state, props) => {

  const syncApptTypeAndTime = (apptType, startTime) => {
    const time = moment(startTime,'hh:mm A');
    let endTime;
    if(apptType === 'halfHour'){
      endTime = time.add(30, 'm');
    }
    if(apptType === 'fullHour' || apptType === 'pair'){
      endTime = time.add(60, 'm');
    }
    return endTime.format('h:mm A');
  };

  const appointment = state.appointments.filter(x=>x.id === props.args.apptId)[0];
  const model = formJsonSchema(state.schema.definitions.appointment, appointment);
  model.startTime.value = moment(model.startTime.value).format('hh:mm A');
  model.endTime.value = moment(model.endTime.value).format('hh:mm A');
  // model.trainer.value = {id: model.trainer.value.id };
  // var trainer = state.trainers.find(x=> x.id === model.trainer.value.id);
  // model.trainer.value.display = trainer ? `${trainer.contact.lastName}, ${trainer.contact.firstName}` : '';
  const clients = state.clients.map(x=> ({ value:x.id , display: `${x.contact.lastName} ${x.contact.firstName}` }));

  // please put this shit in a config somewhere
  const times = generateAllTimes(15, 7, 7);
  return {
    model,
    clients,
    appointmentTypes,
    times,
    cancel: props.cancel,
    syncApptTypeAndTime
  }
};


export default connect(mapStateToProps,
  { updateAppointment,
    fetchAppointmentAction,
    notifClear}
  )(UpdateAppointmentForm);
