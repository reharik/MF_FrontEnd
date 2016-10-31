import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;


// export const LOGIN_SUCCESS = 'methodFit/auth/LOGIN_SUCCESS';


export default (state = [], action = {}) => {
    return state;
}


export function createNewTrainer(data, dispatch) {
console.log('==========config=========');
console.log(config);
console.log('==========END config=========');
  const event = {
    [CALL_API]: {
      endpoint: config.apiBase + 'trainer/create',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    }
  };
  dispatch(event);
}

