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

export default (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_TRAINER_REQUEST: {
      console.log('CREATE_TRAINER_REQUEST');
      return state;
    }
    case CREATE_TRAINER_SUCCESS: {
      let trainer = action.payload.upsertedItem;
      console.log('==========trainer=========');
      console.log(trainer);
      console.log('==========END trainer=========');
      console.log('==========action.payload=========');
      console.log(action.payload);
      console.log('==========END action.payload=========');
      if (!trainer) {
        return state;
      }

      // update if the trainer.id already is in the array
      let newState = state.map(x=> {
        return (x.id === trainer.id) ? trainer : x;
      });

      // add new trainer otherwise
      if (state.every(x => x.id !== trainer.id)) {
        newState.push(trainer);
      }

      return newState;
    }
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
            console.log('==========json.upsertedItem=========');
            console.log(a[CALL_API].body);
            console.log('==========END json.upsertedItem=========');
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
      types: [TRAINER_REQUEST, TRAINER_SUCCESS, TRAINER_FAILURE]
    }
  };
}
