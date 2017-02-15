import {REQ_AJAX_STATE, SUCCESS_AJAX_STATE, FAILURE_AJAX_STATE} from './../modules/ajaxStateModule'
import { takeEvery, call, put } from 'redux-saga/effects';
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
    FAILURE: `methodFit/${reducerName.toLowerCase()}/${entity.toUpperCase()}_FAILURE`
  }
}

var ajaxState = function(action) {
  const actionPrefix = action.type.substr(0, action.type.lastIndexOf('_'));

  const request = () => {
    if (action.startAjaxState) {
      return put({type: REQ_AJAX_STATE, actionPrefix});
    }
  };
  const success = () => {
    if (action.startAjaxState) {
      return put({type:SUCCESS_AJAX_STATE, actionPrefix});
    }
  };
  const failure = (errors) => {
    if (action.startAjaxState) {
      return put({type:FAILURE_AJAX_STATE, actionPrefix, errors});
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
      return yield put(logoutUser());
    }

    payload = yield response.json();
    if (!response.ok) {
      throw new Error(response);
    }
    if(payload && payload.result && !payload.result.success){
      throw new Error('Server was unable to complete the request');
    }

    const success = action.successFunction ? action.successFunction : standardSuccessResponse;
    yield put(success(action, payload));
    yield ajaxStateFunctions.success();

  } catch (err) {

    const failure = action.failureFunction ? action.failureFunction : standardFailureResponse;
    yield ajaxStateFunctions.failure(payload.errors);
    yield put(failure(action, payload || response, err));
  }
}

export default function* () {
  yield takeEvery(action => action.type && action.type.includes('REQUEST'), request);
};

//TODO validate the action received by the request saga and dispatch an error if it's not valid
