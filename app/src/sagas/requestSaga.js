import { takeEvery, call, put } from 'redux-saga/effects';

const standardSuccessResponse = (action, payload) => {
  return {type: action.states.SUCCESS, action, payload};
};

const standardFailureResponse = (action, message, err) => {
  return {type: action.states.FAILURE, action, message, err};
};

export function requestStates(entity, reducerName) {
  reducerName = reducerName || entity;
  return {
    REQUEST: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_REQUEST`,
    SUCCESS: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_SUCCESS`,
    FAILURE: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_FAILURE`
  }
}

function* request(action) {
  let response;
  let payload;
  try {
    response = yield call(fetch, action.url, action.params);
    if (!response.ok) {
      throw new Error(response);
    }
    payload = yield response.json();

    const success = action.successFunction ? action.successFunction : standardSuccessResponse;
    yield put(success(action, payload))

  } catch (err) {
    const failure = action.failureFunction ? action.failureFunction : standardFailureResponse;
    yield put(failure(action, payload || response, err));
  }
}

export default function* () {
  yield takeEvery(action => action.type && action.type.includes('REQUEST'), request);
};



//TODO validate the action received by the request saga and dispatch an error if it's not valid

