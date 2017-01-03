import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { browserHistory } from 'react-router';
import { denormalizeTrainer } from './../utilities/denormalize';
import selectn from 'selectn';

export const HIRE_TRAINER_REQUEST = 'methodFit/trainer/HIRE_TRAINER_REQUEST';
export const HIRE_TRAINER_SUCCESS = 'methodFit/trainer/HIRE_TRAINER_SUCCESS';
export const HIRE_TRAINER_FAILURE = 'methodFit/trainer/HIRE_TRAINER_FAILURE';
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
    case HIRE_TRAINER_REQUEST:
    case TRAINER_REQUEST:
    case TRAINER_LIST_REQUEST: {
      console.log('HIRE_TRAINER_REQUEST');
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
    case HIRE_TRAINER_SUCCESS: {
      var insertedItem = selectn('payload.hiredTrainer', action);
      insertedItem.id = selectn('payload.result.handlerResult.trainerId',action);

      return insertedItem.id ? [...state, denormalizeTrainer(insertedItem)] : state;
    }
    case UPDATE_TRAINER_INFO_FAILURE:
    case HIRE_TRAINER_FAILURE: {
      return state;
    }

    case UPDATE_TRAINER_INFO_SUCCESS: {
      let update = selectn('payload.update', action);

      return state.map(x => {
        if(x.id === update.id) {
          return {...x, contact: {...x.contact, firstName: update.firstName, lastName: update.lastName}}
        }
        return x;
      });
    }

    case UPDATE_TRAINER_PASSWORD_SUCCESS: {
      // don't store the password in state
      return state;
    }

    case UPDATE_TRAINER_CONTACT_SUCCESS: {
      let update = selectn('payload.update', action);

      return state.map(x => {
        if(x.id === update.id) {
          return {...x,
            contact: {
              ...x.contact,
              secondaryPhone: update.secondaryPhone,
              mobilePhone: update.mobilePhone,
              email: update.email
            }
          }
        }
        return x;
      });
    }

    case UPDATE_TRAINER_ADDRESS_SUCCESS: {
      let update = selectn('payload.update', action);

      return state.map(x => {
        if(x.id === update.id) {
          return {...x,
            contact: {
              ...x.contact,
              address: {
                ...x.contact.address,
                street1: update.street1,
                street2: update.street2,
                city: update.city,
                state: update.state,
                zipCode: update.zipCode}
            }
          }
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
  const item = {
    id: data.id,
    birthDate:data.birthDate,
    color: data.color,
    firstName: data.firstName,
    lastName: data.lastName
  };
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerInfo',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_TRAINER_INFO_REQUEST, {
        type: UPDATE_TRAINER_INFO_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.update = item;
            return json
          });
        }
      },
        UPDATE_TRAINER_INFO_FAILURE]
    }
  };
}

export function updateTrainerPassword(data) {
  const item = {
    id: data.id,
    password:data.password
  };
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerPassword',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_TRAINER_PASSWORD_REQUEST, {
        type: UPDATE_TRAINER_PASSWORD_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            return json
          });
        }
      },
        UPDATE_TRAINER_PASSWORD_FAILURE]
    }
  };
}

export function updateTrainerContact(data) {
  const item = {
    id: data.id,
    secondaryPhone: data.secondaryPhone,
    mobilePhone: data.mobilePhone,
    email: data.email
  };
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerContact',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_TRAINER_CONTACT_REQUEST, {
        type: UPDATE_TRAINER_CONTACT_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.update = item;
            return json
          });
        }
      },
        UPDATE_TRAINER_CONTACT_FAILURE]
    }
  };
}

export function updateTrainerAddress(data) {
  const item = {
    id: data.id,
    street1: data.street1,
    street2: data.street2,
    city: data.city,
    state: data.state,
    zipCode: data.zipCode
  };
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/updateTrainerAddress',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_TRAINER_ADDRESS_REQUEST, {
        type: UPDATE_TRAINER_ADDRESS_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.update = item;
            return json
          });
        }
      },
        UPDATE_TRAINER_ADDRESS_FAILURE]
    }
  };
}


export function hireTrainer(data) {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/hireTrainer',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [HIRE_TRAINER_REQUEST, {
        type: HIRE_TRAINER_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/trainers');
          return r.json().then(json => {
            json.hiredTrainer = data;
            return json
          });
        }
      },
        HIRE_TRAINER_FAILURE]
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
