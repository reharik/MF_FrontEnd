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
            localStorage.setItem('id_token', action.payload.user.id);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            return Object.assign({}, state.auth, {
                user: action.payload.user,
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

// function receiveLogin(data) {
//     return {
//         type: LOGIN_SUCCESS,
//         isAuthenticated: true,
//         userName:data.userName
//     }
// }

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
    params: {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
  }
};



// export function loginUser(data) {
//   return {
//     [CALL_API]: {
//       endpoint: configValues.apiBase+'auth',
//       method: 'POST',
//       credentials: 'include',
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//       body: `username=${data.userName}&password=${data.password}`,
//       types: [LOGIN_REQUEST, LOGIN_SUCCESS, 'FAILURE']
//     }
//   };
// }

//
// export function loginUser(data) {
//     //
//     // dispatch(notifSend({
//     //     message: 'hello world',
//     //     kind: 'info',
//     //     dismissAfter: 2000
//     // }));
//     let config = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//       credentials: 'include',
//       body: `username=${data.userName}&password=${data.password}`
//     };
//     // localStorage.setItem('id_token', 'token');
//     // localStorage.setItem('userName', data.userName);
//     // localStorage.setItem('menu_data', JSON.stringify(menuData));
//     //
//     // dispatch(receiveLogin(data));
//     // return Promise.resolve();
//     return fetch(configValues.apiBase+'auth', config)
//        .then(response =>
//        {
//          if(response.status === 401){
//            return Promise.reject(response.statusText);
//          }
//          return response.json().then(body => ({
//              body,
//                response
//            }))}
//     ).then(({ body, response }) => {
//            if (!response.ok) {
//                // If there was a problem, we want to
//                // reject with the error message
//                return Promise.reject(response.errors);
//            } else {
//                // If login was successful, set the token in local storage
//              localStorage.setItem('id_token', body.user.id_token);
//              localStorage.setItem('userName', body.user.userName);
//              // localStorage.setItem('menu_data', JSON.stringify(menuData));
//                // Dispatch the success action
//                dispatch(receiveLogin(body.user))
//            }
//        }).catch(err => console.log("Error: ", err))
// }
