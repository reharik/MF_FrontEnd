import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;


// export const LOGIN_SUCCESS = 'methodFit/auth/LOGIN_SUCCESS';


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
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    }
  };
}
