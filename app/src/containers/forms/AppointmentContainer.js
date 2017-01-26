import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import AppointmentForm from '../../components/forms/AppointmentForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { scheduleAppointment } from './../../modules/appointmentModule';
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

  const model = formJsonSchema(state.schema.definitions.appointment);
  model.date.value = props.args.day;
  model.appointmentType.value = 'halfHour';
  model.startTime.value =  props.args.startTime;
  model.endTime.value = syncApptTypeAndTime(model.appointmentType.value, model.startTime.value);
  model.trainer.value = {id: state.auth.user.id};
  var trainer = state.trainers.find(x=> x.id === model.trainer.value.id);
  model.trainer.value.display = trainer ? `${trainer.contact.lastName}, ${trainer.contact.firstName}` : '';
  const clients = state.clients.map(x=> ({ value:x.id , display: `${x.contact.lastName} ${x.contact.firstName}` }));
console.log(`=========model.trainer.value=========`);
console.log(model.trainer);
console.log(`==========END model.trainer.value=========`);
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
  { scheduleAppointment,
    notifClear}
  )(AppointmentForm);
