/**
 * Created by reharik on 5/31/15.
 */
var APIActionCreator = require('fluxthis').APIActionCreator;

var fetchUserAC = new APIActionCreator({
    displayName: 'fetchUserAction',
    fetchUser: {
        route: '/auth',
        method: 'GET',
        pending: 'FETCH_USER_PENDING',
        success: 'FETCH_USER_SUCCESS',
        failure: 'FETCH_USER_FAILURE',
        successTest(response) {
            return response &&
                response.status &&
                response.status >= 200 &&
                response.status < 300;
        }
    }
});

var signInAC = new APIActionCreator({
    displayName: 'signInAction',
    fetchUser: {
        route: '/signup',
        method: 'GET',
        pending: 'SIGN_IN_PENDING',
        success: 'SIGN_IN_SUCCESS',
        failure: 'SIGN_IN_FAILURE',
        successTest(response) {
            return response &&
                response.status &&
                response.status >= 200 &&
                response.status < 300;
        }

    }
});

var signOutAC = new APIActionCreator({
    displayName: 'signOutAction',
    fetchUser: {
        route: '/signout',
        method: 'GET',
        pending: 'SIGN_OUT_PENDOUTG',
        success: 'SIGN_OUT_SUCCESS',
        failure: 'SIGN_OUT_FAILURE',
        successTest(response) {
            return response &&
                response.status &&
                response.status >= 200 &&
                response.status < 300;
        }
    }
});