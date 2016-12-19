import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;
import { browserHistory } from 'react-router';

export const CREATE_TRAINER_REQUEST = 'methodFit/trainer/CREATE_TRAINER_REQUEST';
export const CREATE_TRAINER_SUCCESS = 'methodFit/trainer/CREATE_TRAINER_SUCCESS';
export const CREATE_TRAINER_FAILURE = 'methodFit/trainer/CREATE_TRAINER_FAILURE';
export const UPDATE_TRAINER_PASSWORD_REQUEST = 'methodFit/trainer/UPDATE_TRAINER_PASSWORD_REQUEST';
export const UPDATE_TRAINER_PASSWORD_SUCCESS = 'methodFit/trainer/UPDATE_TRAINER_PASSWORD_SUCCESS';
export const UPDATE_TRAINER_PASSWORD_FAILURE = 'methodFit/trainer/UPDATE_TRAINER_PASSWORD_FAILURE';
export const UPDATE_TRAINER_CONTACT_REQUEST = 'methodFit/trainer/UPDATE_TRAINER_CONTACT_REQUEST';
export const UPDATE_TRAINER_CONTACT_SUCCESS = 'methodFit/trainer/UPDATE_TRAINER_CONTACT_SUCCESS';
export const UPDATE_TRAINER_CONTACT_FAILURE = 'methodFit/trainer/UPDATE_TRAINER_CONTACT_FAILURE';
export const UPDATE_TRAINER_ADDRESS_REQUEST = 'methodFit/trainer/UPDATE_TRAINER_ADDRESS_REQUEST';
export const UPDATE_TRAINER_ADDRESS_SUCCESS = 'methodFit/trainer/UPDATE_TRAINER_ADDRESS_SUCCESS';
export const UPDATE_TRAINER_ADDRESS_FAILURE = 'methodFit/trainer/UPDATE_TRAINER_ADDRESS_FAILURE';
export const UPDATE_TRAINER_INFO_REQUEST = 'methodFit/trainer/UPDATE_TRAINER_INFO_REQUEST';
export const UPDATE_TRAINER_INFO_SUCCESS = 'methodFit/trainer/UPDATE_TRAINER_INFO_SUCCESS';
export const UPDATE_TRAINER_INFO_FAILURE = 'methodFit/trainer/UPDATE_TRAINER_INFO_FAILURE';
export const TRAINER_REQUEST = 'methodFit/trainer/TRAINER_REQUEST';
export const TRAINER_SUCCESS = 'methodFit/trainer/TRAINER_SUCCESS';
export const TRAINER_FAILURE = 'methodFit/trainer/TRAINER_FAILURE';
export const TRAINER_LIST_REQUEST = 'methodFit/trainer/TRAINER_LIST_REQUEST';
export const TRAINER_LIST_SUCCESS = 'methodFit/trainer/TRAINER_LIST_SUCCESS';
export const TRAINER_LIST_FAILURE = 'methodFit/trainer/TRAINER_LIST_FAILURE';


const trainerReducer = (map = new Map, trainer = {}) => {
  map.set(trainer.id,trainer);
  return map;
};


export default (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_TRAINER_REQUEST:
    case TRAINER_REQUEST:
    case TRAINER_LIST_REQUEST: {
      console.log('CREATE_TRAINER_REQUEST');
      return state;
    }
    case TRAINER_SUCCESS: {
      let m = new Map();
      for(let obj of state) {
        if (obj && obj.id) {
            m.set(obj.id, obj);
        }
      }
      trainerReducer(m, action.payload);
      return [...m.values()];
    }
    case TRAINER_LIST_SUCCESS: {
      let m = new Map();
      for(let obj of state) {
        if (obj && obj.id) {
          m.set(obj.id, obj);
        }
      }
      action.payload.reduce((prev, item) => { return trainerReducer(prev, item) }, m);
      return [...m.values()];
    }
    case CREATE_TRAINER_SUCCESS: {
      // we want the id from the success payload and the action
      // that triggered the upsert.  combine those and then
      // do like trainerSuccess
      console.log('==========action=========');
      console.log(action);
      console.log('==========END action=========');
      return state;
    }
    case UPDATE_TRAINER_INFO_FAILURE:
    case CREATE_TRAINER_FAILURE: {
      return state;
    }

    case UPDATE_TRAINER_INFO_SUCCESS: {
      return state.map(x => {
        if(x.id === action.id) {
          return {...x, firstName: action.firstName, lastName: action.lastName}
        }
        return x;
      });
    }

    default: {
      return state;
    }
  }
}


export function updateTrainerInfo(data) {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerInfo',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [UPDATE_TRAINER_INFO_REQUEST, {
        type: UPDATE_TRAINER_INFO_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/trainers');
          return r.json().then(json => {
            json.upsertedItem = a[CALL_API].body;
            return json
          });
        }
      },
        UPDATE_TRAINER_INFO_FAILURE]
    }
  };
}

export function updateTrainerPassword(data) {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerPassword',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [UPDATE_TRAINER_PASSWORD_REQUEST, {
        type: UPDATE_TRAINER_PASSWORD_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/trainers');
          return r.json().then(json => {
            json.upsertedItem = a[CALL_API].body;
            return json
          });
        }
      },
        UPDATE_TRAINER_PASSWORD_FAILURE]
    }
  };
}

export function updateTrainerContact(data) {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerContact',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [UPDATE_TRAINER_CONTACT_REQUEST, {
        type: UPDATE_TRAINER_CONTACT_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/trainers');
          return r.json().then(json => {
            json.upsertedItem = a[CALL_API].body;
            return json
          });
        }
      },
        UPDATE_TRAINER_CONTACT_FAILURE]
    }
  };
}

export function updateTrainerAddress(data) {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerAddress',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [UPDATE_TRAINER_ADDRESS_REQUEST, {
        type: UPDATE_TRAINER_ADDRESS_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/trainers');
          return r.json().then(json => {
            json.upsertedItem = a[CALL_API].body;
            return json
          });
        }
      },
        UPDATE_TRAINER_ADDRESS_FAILURE]
    }
  };
}


export function createTrainer(data) {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/create',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [CREATE_TRAINER_REQUEST, {
        type: CREATE_TRAINER_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/trainers');
          return r.json().then(json => {
            json.upsertedItem = a[CALL_API].body;
            return json
          });
        }
      },
        CREATE_TRAINER_FAILURE]
    }
  };
}

export function fetchTrainerAction(id){
  let apiUrl = config.apiBase + 'trainer/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      credentials: 'include',
      types: [TRAINER_REQUEST, {type:TRAINER_SUCCESS, payload:
        (action, state, res) => res.json()},
        TRAINER_FAILURE]
    }
  };
}
// put paging sorting etc params here
export function fetchTrainersAction() {
  let apiUrl = config.apiBase + 'trainers';
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      credentials: 'include',
      types: [TRAINER_LIST_REQUEST, {type:TRAINER_LIST_SUCCESS, payload:
        (action, state, res) => res.json().then((json) => {
          return json.trainers})},

        TRAINER_LIST_FAILURE]
    }
  };
}
