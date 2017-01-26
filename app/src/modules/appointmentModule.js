import { CALL_API } from 'redux-api-middleware';
import reducerMerge from './../utilities/reducerMerge';
import {getISODateTime} from './../utilities/appointmentTimes';
import config from './../utilities/configValues';
import uuid from 'uuid';
import moment from 'moment';

export const FETCH_APPOINTEMENTS_REQUEST = 'methodFit/calendar/FETCH_APPOINTEMENTS_REQUEST';
export const FETCH_APPOINTEMENTS_SUCCESS = 'methodFit/client/FETCH_APPOINTEMENTS_SUCCESS';
export const FETCH_APPOINTEMENTS_FAILURE = 'methodFit/client/FETCH_APPOINTEMENTS_FAILURE';
export const SCHEDULE_APPOINTEMENT_REQUEST = 'methodFit/calendar/SCHEDULE_APPOINTEMENT_REQUEST';
export const SCHEDULE_APPOINTEMENT_SUCCESS = 'methodFit/client/SCHEDULE_APPOINTEMENT_SUCCESS';
export const SCHEDULE_APPOINTEMENT_FAILURE = 'methodFit/client/SCHEDULE_APPOINTEMENT_FAILURE';
export const UPDATE_APPOINTEMENT_REQUEST = 'methodFit/calendar/UPDATE_APPOINTEMENT_REQUEST';
export const UPDATE_APPOINTEMENT_SUCCESS = 'methodFit/client/UPDATE_APPOINTEMENT_SUCCESS';
export const UPDATE_APPOINTEMENT_FAILURE = 'methodFit/client/UPDATE_APPOINTEMENT_FAILURE';



export default (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE_APPOINTEMENT_SUCCESS:
    case SCHEDULE_APPOINTEMENT_SUCCESS: {
      return reducerMerge(state, action.payload.upsertedItem);
    }
    case FETCH_APPOINTEMENTS_SUCCESS:
    {
      return reducerMerge(state, action.payload);
    }
  }
  return state;
}
//
// const a = uuid.v4();
// const b = uuid.v4();
// const c = uuid.v4();
// const d = uuid.v4();
//
// const getData = function() {
//   return [
//     {
//       display: 'fuck you!1',
//       startTime: '8:00 AM',
//       endTime: '9:00 AM',
//       date: new Date(),
//       id: a,
//       color: 'red'
//     },
//     {
//       display: 'fuck you!2',
//       startTime: '8:30 AM',
//       endTime: '9:30 AM',
//       date: new Date(),
//       id: b,
//       color: 'red'
//     },
//     {
//       display: 'fuck you!3',
//       startTime: '8:30 AM',
//       endTime: '9:00 AM',
//       date: new Date(),
//       id: c,
//       color: 'red'
//     },
//     {
//       display: 'fuck you!4',
//       startTime: '9:00 AM',
//       endTime: '10:00 AM',
//       date: new Date(),
//       id: d,
//       color: 'red'
//     }
//   ]
// };

export function scheduleAppointment(data) {
  console.log('==========data=========');
  console.log(data);
  console.log('==========END data=========');
  const startTime = getISODateTime(data.date, data.startTime);
  const endTime = getISODateTime(data.date, data.endTime);
  const formattedData = {...data,
    date: startTime,
    startTime: startTime,
    endTime: endTime,
    entityName: data.date};
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'appointment/scheduleAppointment',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formattedData),
      types: [{type: SCHEDULE_APPOINTEMENT_REQUEST,
        payload:formattedData}, {
        type: SCHEDULE_APPOINTEMENT_SUCCESS,
        payload: (a, s, r) => {
           try {
             return r.json().then(json => {
              json.upsertedItem = formattedData;
               json.upsertedItem.id = json.result.appointmentId;
              return json
            });
          } catch (ex)
          {
            return {success:false, error:ex};
          }
        }
      },
        SCHEDULE_APPOINTEMENT_FAILURE]
    }
  };
};

export function updateAppointment(data) {
  console.log('==========data=========');
  console.log(data);
  console.log('==========END data=========');
  const startTime = getISODateTime(data.date, data.startTime);
  const endTime = getISODateTime(data.date, data.endTime);
  const formattedData = {...data,
    date: startTime,
    startTime: startTime,
    endTime: endTime,
    entityName: moment(data.date).format('YYYYMMDD')};
  console.log('==========formattedData=========');
  console.log(formattedData);
  console.log('==========END formattedData=========');
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'appointment/updateAppointment',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formattedData),
      types: [{type: UPDATE_APPOINTEMENT_REQUEST,
        payload:formattedData}, {
        type: UPDATE_APPOINTEMENT_SUCCESS,
        payload: (a, s, r) => {
          try {
            return r.json().then(json => {
              json.upsertedItem = formattedData;
              return json
            });
          } catch (ex)
          {
            return {success:false, error:ex};
          }
        }
      },
        UPDATE_APPOINTEMENT_FAILURE]
    }
  };
};


export function fetchAppointmentAction(appointmentId) {
  let apiUrl = `${config.apiBase}fetchAppointment/${appointmentId}`;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      credentials: 'include',
      types: [FETCH_APPOINTEMENTS_REQUEST, {type:FETCH_APPOINTEMENTS_SUCCESS, payload:
        (action, state, res) => res.json().then((json) => {
          return json.appointments})},
        FETCH_APPOINTEMENTS_FAILURE]
    }
  };
};


export function fetchAppointmentsAction(startDate = moment().startOf('month'),
                                        endDate = moment().endOf('month'),
                                        trainerId) {
  const start = moment(startDate).format('YYYYMMDD');
  const end = moment(endDate).format('YYYYMMDD');
  let apiUrl = `${config.apiBase}fetchAppointments/${start}/${end}/${trainerId||''}`;

  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      credentials: 'include',
      types: [FETCH_APPOINTEMENTS_REQUEST, {type:FETCH_APPOINTEMENTS_SUCCESS, payload:
        (action, state, res) => res.json().then((json) => {
          return json.appointments})},
        FETCH_APPOINTEMENTS_FAILURE]
    }
  };
};
