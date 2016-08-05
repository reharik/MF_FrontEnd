/**
 * Created by reharik on 3/10/16.
 */
import {
    LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
    } from './../actions/authActions.js';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
//function auth(state = {isAuthenticated:'true', userName:'raif harik'}

function auth(state = {userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state.auth, {
        userName: action.userName,
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

export default auth;
