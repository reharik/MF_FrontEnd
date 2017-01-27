import reducerMerge from './../utilities/reducerMerge';
import {getISODateTime} from './../utilities/appointmentTimes';
import config from './../utilities/configValues';
import uuid from 'uuid';
import moment from 'moment';
import { requestStates } from '../sagas/requestSaga';
import selectn from 'selectn';

export const FETCH_APPOINTMENTS = requestStates('fetch_appointments', 'appointments');
export const SCHEDULE_APPOINTMENT = requestStates('schedule_appointment', 'appointments');
export const UPDATE_APPOINTMENT = requestStates('update_appointment', 'appointments');

export default (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE_APPOINTMENT.SUCCESS:
    case SCHEDULE_APPOINTMENT.SUCCESS: {
      var upsertedItem = selectn('action.upsertedItem', action);
      upsertedItem.id = selectn('payload.result.appointmentId',action);
      return reducerMerge(state, upsertedItem);
    }
    case FETCH_APPOINTMENTS.SUCCESS:
    {
      return reducerMerge(state, action.payload.appointments);
    }
  }
  return state;
}

export function scheduleAppointment(data) {
  const startTime = getISODateTime(data.date, data.startTime);
  const endTime = getISODateTime(data.date, data.endTime);
  const formattedData = {...data,
    date: startTime,
    startTime: startTime,
    endTime: endTime,
    entityName: data.date};
  return {
    type: SCHEDULE_APPOINTMENT.REQUEST,
    states: SCHEDULE_APPOINTMENT,
    url: config.apiBase + 'appointment/scheduleAppointment',
    upsertedItem: formattedData,
    params: {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formattedData)
    }
  };
}

export function updateTaskViaDND(data){
  const submitData = {...data.orig, date:data.date, startTime: data.startTime, endTime: data.endTime};
  return updateAppointment(submitData);
}

export function updateAppointment(data) {
  const startTime = getISODateTime(data.date, data.startTime);
  const endTime = getISODateTime(data.date, data.endTime);
  const formattedData = {...data,
    date: startTime,
    startTime: startTime,
    endTime: endTime,
    entityName: moment(data.date).format('YYYYMMDD')};
  return {
    type: UPDATE_APPOINTMENT.REQUEST,
    states: UPDATE_APPOINTMENT,
    url: config.apiBase + 'appointment/updateAppointment',
    upsertedItem: formattedData,
    params: {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formattedData)
    }
  };
}

export function fetchAppointmentAction(appointmentId) {
  let apiUrl = `${config.apiBase}fetchAppointment/${appointmentId}`;
  return {
    type: FETCH_APPOINTMENTS.REQUEST,
    states: FETCH_APPOINTMENTS,
    url: apiUrl,
    params: {
      method: 'GET',
      credentials: 'include'
    }
  };
}

export function fetchAppointmentsAction(startDate = moment().startOf('month'),
                                        endDate = moment().endOf('month'),
                                        trainerId) {
  const start = moment(startDate).format('YYYYMMDD');
  const end = moment(endDate).format('YYYYMMDD');
  let apiUrl = `${config.apiBase}fetchAppointments/${start}/${end}/${trainerId||''}`;

  return {
    type: FETCH_APPOINTMENTS.REQUEST,
    states: FETCH_APPOINTMENTS,
    url: apiUrl,
    params: {
      method: 'GET',
      credentials: 'include'
    }
  };
}