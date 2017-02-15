import { requestStates } from '../sagas/requestSaga';
import configValues from './../utilities/configValues';

export const LOGIN = requestStates('login', 'auth');
export const LOGOUT_SUCCESS = 'methodFit/auth/LOGOUT_SUCCESS';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '',
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token')
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case LOGIN.SUCCESS:
            localStorage.setItem('id_token', action.response.user.id);
            localStorage.setItem('user', JSON.stringify(action.response.user));
            return Object.assign({}, state.auth, {
                user: action.response.user,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGOUT_SUCCESS:
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
    type: LOGOUT_SUCCESS,
    isAuthenticated: false
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
