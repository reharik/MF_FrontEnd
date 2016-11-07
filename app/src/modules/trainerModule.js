import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;


export const CREATE_TRAINER_REQUEST = 'methodFit/trainer/CREATE_TRAINER_REQUEST';
export const CREATE_TRAINER_SUCCESS = 'methodFit/trainer/CREATE_TRAINER_SUCCESS';
export const CREATE_TRAINER_FAILURE = 'methodFit/trainer/CREATE_TRAINER_FAILURE';


export default (state = [], action = {}) => {
    return state;
}

export function createNewTrainer(data) {
  console.log('==========data=========');
  console.log(data);
  console.log('==========END data=========');
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/create',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [CREATE_TRAINER_REQUEST, CREATE_TRAINER_SUCCESS, CREATE_TRAINER_FAILURE]
    }
  };
}
