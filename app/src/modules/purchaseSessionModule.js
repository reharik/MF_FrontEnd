import config from './../utilities/configValues';
import { browserHistory } from 'react-router';
import selectn from 'selectn';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

export const PURCHASE_SESSIONS = requestStates('purchase_sessions', 'purchase_sessions');

export default (state = [], action = {}) => {
      return state;
}


const successFunction = (action, payload) => {
  browserHistory.push('/purchasedsessions');
  return {type: action.states.SUCCESS, action, payload};
};

export function purchaseSessions(data) {
  return {
    type: PURCHASE_SESSIONS.REQUEST,
    states: PURCHASE_SESSIONS,
    url: config.apiBase + 'sessions/purchase',
    successFunction,
    containerName: 'purchaseSessionForm',
    params: {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
  };
}

