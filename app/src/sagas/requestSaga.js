import {REQ_AJAX_STATE, SUCCESS_AJAX_STATE, FAILURE_AJAX_STATE} from './../modules/ajaxStateModule'
import { notifications }  from './../modules/notificationModule';

import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { logoutUser } from './../modules'

const standardSuccessResponse = (action, payload) => {
  //payload renamed to response here as it's a bit more semantic for the frontend
  return {type: action.states.SUCCESS, action, response:payload};
};

const standardFailureResponse = (action, message, err) => {
  return {type: action.states.FAILURE, action, message, err};
};

export function requestStates(entity, reducerName) {
  reducerName = reducerName || entity;
  return {
    REQUEST: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_REQUEST`,
    SUCCESS: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_SUCCESS`,
    FAILURE: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_FAILURE`,
    PREFIX:  `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}`
  }
}

var ajaxState = function(action) {
  const request = () => {
    if (action.startAjaxState) {
      return put({type: REQ_AJAX_STATE, actionPrefix: action.states.PREFIX});
    }
  };

  const success = () => {
    if (action.startAjaxState) {
      return put({type:SUCCESS_AJAX_STATE, actionPrefix: action.states.PREFIX});
    }
  };
  const failure = (payload) => {
    if (action.startAjaxState) {
      if(payload && payload.errors){
        put(notifications(payload.errors, action.containerName))
      }
      return put({type:FAILURE_AJAX_STATE, actionPrefix: action.states.PREFIX});
    }
  };
  return {
    request,
    success,
    failure
  }
};

function* request(action) {
  let response;
  let payload;
  let ajaxStateFunctions = ajaxState(action);
  try {
    yield ajaxStateFunctions.request();
    response = yield call(fetch, action.url, action.params);

    if(response.status === 401) {
      yield put(logoutUser());
      throw new Error("Invalid credentials. Please try to login again");
    }
    const success = action.successFunction ? action.successFunction : standardSuccessResponse;
    if(response.status === 204) {
      yield put(success(action, payload));
      yield ajaxStateFunctions.success();
      return;
    }

    payload = yield response.json();

    if (!response.ok) {
      throw new Error(response);
    }
    if(payload && payload.result && !payload.result.success){
      throw new Error('Server was unable to complete the request');
    }

    yield put(success(action, payload));
    yield ajaxStateFunctions.success();

  } catch (err) {
    const failure = action.failureFunction ? action.failureFunction : standardFailureResponse;
    yield ajaxStateFunctions.failure(payload);
    yield put(failure(action, payload || response, err));
  }
}

export default function* () {
  yield takeEvery(action => action.type && action.type.includes('REQUEST'), request);
};

//TODO validate the action received by the request saga and dispatch an error if it's not valid
