/**
 * Created by reharik on 3/10/16.
 */
var Promise = require('bluebird');
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

var menuData ={ menuItems: [
    {text: 'Trainers', path: 'trainers'},
    {text: 'Animal', children: [
        {text: 'Land', children: [
            {text: 'Cheetah', path: 'Cheetah'},
            {text: 'Ant', path: 'Ant'}
        ]},
        {text: 'Air', children: [
            {text: 'Eagle', path: 'Eagle'}
        ]},
        {text: 'Water', children: [
            {text: 'Nessy', path: 'Nessy'}
        ]}
    ]},
    {text: 'Vegetable', children: [
        {text: 'Broccoli', path: 'Broccoli'},
        {text: 'IE6', path: 'IE6'}
    ]},
    {text: 'Mineral', children: [
        {text: 'Granite', path: 'Granite'},
        {text: 'Uraninite', path: 'Uraninite'}
    ]}
]};

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

    dispatch(receiveLogin(data));
    return Promise.resolve();
    //return fetch('login', config)
    //    .then(response =>
    //        response.json().then(user => ({
    //            user,
    //            response
    //        }))
    //).then(({ user, response }) => {
    //        if (!response.ok) {
    //            // If there was a problem, we want to
    //            // reject with the error message
    //            return Promise.reject(response.errors);
    //        } else {
    //            // If login was successful, set the token in local storage
    //            localStorage.setItem('id_token', user.id_token);
    //            // Dispatch the success action
    //            dispatch(receiveLogin(user))
    //        }
    //    }).catch(err => console.log("Error: ", err))
}