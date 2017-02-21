import { requestStates } from '../sagas/requestSaga';
import configValues from './../utilities/configValues';
import selectn from 'selectn';
export const LOGIN = requestStates('login', 'auth');
export const LOGOUT = requestStates('logout', 'auth');

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '',
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token')
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      var user = selectn('response.user', action);

      localStorage.setItem('id_token', user.id);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('==========user=========');
      console.log(user);
      console.log('==========END user=========');
      return {
        user: user,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGOUT.SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
}

export function logoutUser() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('user');
  localStorage.removeItem('menu_data');
  return {
    type: LOGOUT.REQUEST,
    states: LOGOUT,
    url: configValues.apiBase + 'signout',
    params: {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    }
  };
}

export function loginUser(data) {
  return {
    type: LOGIN.REQUEST,
    states: LOGIN,
    url: configValues.apiBase + 'auth',
    startAjaxState: true,
    params: {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
  }
}
