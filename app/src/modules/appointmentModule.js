import { CALL_API } from 'redux-api-middleware';
import reducerMerge from './../utilities/reducerMerge';
import config from './../utilities/configValues';
import uuid from 'uuid'

export const FETCH_APPOINTEMENTS_REQUEST = 'methodFit/calendar/FETCH_APPOINTEMENTS_REQUEST';
export const FETCH_APPOINTEMENTS_SUCCESS = 'methodFit/client/FETCH_APPOINTEMENTS_SUCCESS';
export const FETCH_APPOINTEMENTS_FAILURE = 'methodFit/client/FETCH_APPOINTEMENTS_FAILURE';
export const SCHEDULE_APPOINTEMENT_REQUEST = 'methodFit/calendar/SCHEDULE_APPOINTEMENT_REQUEST';
export const SCHEDULE_APPOINTEMENT_SUCCESS = 'methodFit/client/SCHEDULE_APPOINTEMENT_SUCCESS';
export const SCHEDULE_APPOINTEMENT_FAILURE = 'methodFit/client/SCHEDULE_APPOINTEMENT_FAILURE';


export default (state = [], action = {}) => {
  switch (action.type) {
    case SCHEDULE_APPOINTEMENT_SUCCESS: {
      return reducerMerge(state, action.payload);
    }
    case FETCH_APPOINTEMENTS_SUCCESS:
    {
      return reducerMerge(state, action.payload);
    }
  }
  return state;
}

const a = uuid.v4();
const b = uuid.v4();
const c = uuid.v4();
const d = uuid.v4();

const getData = function() {
  return [
    {
      display: 'fuck you!1',
      startTime: '8:00 AM',
      endTime: '9:00 AM',
      date: new Date(),
      id: a,
      color: 'red'
    },
    {
      display: 'fuck you!2',
      startTime: '8:30 AM',
      endTime: '9:30 AM',
      date: new Date(),
      id: b,
      color: 'red'
    },
    {
      display: 'fuck you!3',
      startTime: '8:30 AM',
      endTime: '9:00 AM',
      date: new Date(),
      id: c,
      color: 'red'
    },
    {
      display: 'fuck you!4',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      date: new Date(),
      id: d,
      color: 'red'
    }
  ]
};

export function scheduleAppointment(data) {
  console.log('=========="here"=========');
  console.log("here");
  console.log('==========END "here"=========');
  data.appointmentType = data.appointmentType ? data.appointmentType.value : undefined;
  data.startTime = data.startTime ? data.startTime.value : undefined;
  data.clients = data.clients ? data.clients.map( x => x.value ) : [];

  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'appointment/scheduleAppointment',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [SCHEDULE_APPOINTEMENT_REQUEST, {
        type: SCHEDULE_APPOINTEMENT_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.insertedItem = data;
            return json
          });
        }
      },
        SCHEDULE_APPOINTEMENT_FAILURE]
    }
  };
}

export function fetchAppointmentAction(startDate, endDate) {
  var payload = getData();
  return {type: FETCH_APPOINTEMENTS_SUCCESS, payload};
};

export function fetchAppointmentsAction(startDate, endDate) {
  var payload = getData();
  return {type: FETCH_APPOINTEMENTS_SUCCESS, payload};
};
