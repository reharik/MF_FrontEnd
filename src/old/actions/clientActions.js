/**
 * Created by reharik on 5/31/15.
 */

let APIActionCreator = require('fluxthis').APIActionCreator;

let trainerGeneratedClientSignedUprAC = new APIActionCreator({
  displayName: 'trainerGeneratedClientSignedUpAction',
  fetchUser: {
    route: '/client',
    method: 'GET',
    pending: 'TRAINER_GENERATED_CLIENT_SIGNED_UP_PENDING',
    success: 'TRAINER_GENERATED_CLIENT_SIGNED_UP_SUCCESS',
    failure: 'TRAINER_GENERATED_CLIENT_SIGNED_UP_FAILURE',
    successTest(response) {
      return response &&
                response.status &&
                response.status >= 200 &&
                response.status < 300;
    },
        // add proper values here
    createRequest(username, password) {
      return {
        params: {
          userName: username,
          password
        }
      };
    }
  }
});
