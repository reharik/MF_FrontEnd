/**
 * Created by reharik on 5/31/15.
 */
let APIActionCreator = require('fluxthis').APIActionCreator;

let loadTrainerSummariesAC = new APIActionCreator({
  displayName: 'loadTrainerSummaries',
  fetchUser: {
    route: '/trainers',
    method: 'GET',
    pending: 'LOAD_TRAINER_SUMMARIES_PENDING',
    success: 'LOAD_TRAINER_SUMMARIES_SUCCESS',
    failure: 'LOAD_TRAINER_SUMMARIES_FAILURE',
    successTest(response) {
      return response &&
                response.status &&
                response.status >= 200 &&
                response.status < 300;
    },
        // add paging here
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
