import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import AppointmentForm from '../../components/forms/AppointmentForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { scheduleAppointment, fetchAppointmentAction } from './../../modules/appointmentModule';
import appointmentTypes from './../../constants/appointmentTypes';
import { generateAllTimes } from './../../utilities/appointmentTimes';
import moment from 'moment';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;

const mapStateToProps = (state, props) => {

  const syncApptTypeAndTime = (apptType, startTime) => {
    console.log('==========moment(startTime).format)=========');
    console.log(startTime);
    console.log('==========END moment(startTime).format');
    const time = moment(`2013-02-08 ${moment(startTime,'hh:mm').format('hh:mm')}`);
    let endTime;
    console.log('==========time=========');
    console.log(time);
    console.log('==========END time=========');
    if(apptType === 'halfHour'){
      endTime = time.add(30, 'm');
    }
    if(apptType === 'fullHour' || apptType === 'pair'){
      endTime = time.add(60, 'm');
    }
    return endTime.format('h:mm A');
  };

  const appointment = state.appointments.filter(x=>x.id === props.args.apptId)[0];
  const startTime = props.startTime ? props.args.startTime : moment().add(1,'hour').startOf('hour').format('h:mm A');
  const model = formJsonSchema(state.schema.definitions.appointment, appointment);
  model.date.value = model.date.value || props.args.day || moment().toISOString();
  model.appointmentType.value = model.appointmentType.value || 'halfHour';
  model.startTime.value = model.startTime.value || props.args.time || startTime;
  model.endTime.value = model.endTime.value || syncApptTypeAndTime(model.appointmentType.value, model.startTime.value);
  model.trainer.value = {id: model.trainer.value ? model.trainer.value.id : state.auth.user.id};
  var trainer = state.trainers.find(x=> x.id === model.trainer.value.id);
  model.trainer.value.display = trainer ? `${trainer.contact.lastName}, ${trainer.contact.firstName}` : '';
  const clients = state.clients.map(x=> ({ value:x.id , display: `${x.contact.lastName} ${x.contact.firstName}` }));
  const times = generateAllTimes(15);
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
  { scheduleAppointment,
    fetchAppointmentAction,

    notifClear}
  )(AppointmentForm);
