import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;
import { browserHistory } from 'react-router';

export const CREATE_TRAINER_REQUEST = 'methodFit/trainer/CREATE_TRAINER_REQUEST';
export const CREATE_TRAINER_SUCCESS = 'methodFit/trainer/CREATE_TRAINER_SUCCESS';
export const CREATE_TRAINER_FAILURE = 'methodFit/trainer/CREATE_TRAINER_FAILURE';
export const TRAINER_REQUEST = 'methodFit/trainer/TRAINER_REQUEST';
export const TRAINER_SUCCESS = 'methodFit/trainer/TRAINER_SUCCESS';
export const TRAINER_FAILURE = 'methodFit/trainer/TRAINER_FAILURE';
export const TRAINER_LIST_REQUEST = 'methodFit/trainer/TRAINER_LIST_REQUEST';
export const TRAINER_LIST_SUCCESS = 'methodFit/trainer/TRAINER_LIST_SUCCESS';
export const TRAINER_LIST_FAILURE = 'methodFit/trainer/TRAINER_LIST_FAILURE';


const trainerReducer = (map = new Map, trainer = {}) => {
  if (!trainer) {
    return;
  }
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
    case CREATE_TRAINER_SUCCESS:
    case CREATE_TRAINER_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export function createNewTrainer(data) {
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
