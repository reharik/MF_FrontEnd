import formJsonSchema from './../utilities/formJsonSchema';
import { syncApptTypeAndTime } from './../utilities/appointmentTimes';
import moment from 'moment';

export function appointmentModel(state, args) {
  const model = formJsonSchema(state.schema.definitions.appointment);
  model.date.value = args.day;
  model.appointmentType.value = 'halfHour';
  model.startTime.value = args.startTime;
  model.endTime.value = syncApptTypeAndTime(model.appointmentType.value, model.startTime.value);
  model.trainer.value = {id: state.auth.user.id};
  var trainer = state.trainers.find(x=> x.id === model.trainer.value.id);
  model.trainer.value.display = trainer ? `${trainer.contact.lastName}, ${trainer.contact.firstName}` : '';
  return model;
}

export function copyAppointmentModel(state, args) {
  const appointment = state.appointments.filter(x=>x.id === args)[0];
  const model = formJsonSchema(state.schema.definitions.appointment, appointment);
  model.startTime.value = moment(model.startTime.value).format('hh:mm A');
  model.endTime.value = moment(model.endTime.value).format('hh:mm A');
  model.date.value = '';
  model.id = '';
  return model;
}

export function updateAppointmentModel(state, args) {
  const appointment = state.appointments.filter(x=>x.id === args.apptId)[0];
  const model = formJsonSchema(state.schema.definitions.appointment, appointment);
  model.startTime.value = moment(model.startTime.value).format('hh:mm A');
  model.endTime.value = moment(model.endTime.value).format('hh:mm A');
  return model;
}