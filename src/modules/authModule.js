export const LOGIN_SUCCESS = 'methodFit/auth/LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'methodFit/auth/LOGOUT_SUCCESS';

const initialState = {
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token')
};

export default (state = initialState, action = {}) => {
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

function receiveLogin(data) {
    return {
        type: LOGIN_SUCCESS,
        isAuthenticated: true,
        userName:data.userName
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isAuthenticated: false
    }
}

// Logs the user out
export function logoutUser(e) {
    e.preventDefault();
    return dispatch => {
        localStorage.removeItem('id_token');
        localStorage.removeItem('userName');
        localStorage.removeItem('menu_data');
        dispatch(receiveLogout())
    }
}

export function loginUser(data, dispatch) {
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${data.userName}&password=${data.password}`
    };
    localStorage.setItem('id_token', 'token');
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('menu_data', JSON.stringify(menuData));

    // dispatch(receiveLogin(data));
    // return Promise.resolve();
    return fetch('login', config)
       .then(response =>
           response.json().then(user => ({
               user,
               response
           }))
    ).then(({ user, response }) => {
           if (!response.ok) {
               // If there was a problem, we want to
               // reject with the error message
               return Promise.reject(response.errors);
           } else {
               // If login was successful, set the token in local storage
               localStorage.setItem('id_token', user.id_token);
               // Dispatch the success action
               dispatch(receiveLogin(user));
             //dipsatch(clearNotifs)
           }
       }).catch(err => console.log("Error: ", err))
}

export const model = {
  userName: {
    formField: 'userName',
    type: 'text',
    required: 'User Name field is Required',
    revalidateOnSubmit: true
  },
  password: {
    formField: 'password',
    type: 'password',
    required: 'Password field is Required',
    revalidateOnSubmit: true
  }
};
