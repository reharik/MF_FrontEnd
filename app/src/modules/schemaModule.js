import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';

export const SCHEMA_SUCCESS = 'methodFit/schema/SCHEMA_SUCCESS';

export default (state = {definitions: {}}, action = {}) => {
  switch (action.type) {
    case SCHEMA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function getJsonSchema() {
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'swagger',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      types: ['REQUEST', SCHEMA_SUCCESS, 'FAILURE']
    }
  };
}

