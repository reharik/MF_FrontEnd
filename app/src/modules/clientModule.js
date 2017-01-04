import { CALL_API } from 'redux-api-middleware';
import config from './../utilities/configValues';
import { browserHistory } from 'react-router';
import { denormalizeContact } from './../utilities/denormalize';
import selectn from 'selectn';

export const ADD_CLIENT_REQUEST = 'methodFit/client/ADD_CLIENT_REQUEST';
export const ADD_CLIENT_SUCCESS = 'methodFit/client/ADD_CLIENT_SUCCESS';
export const ADD_CLIENT_FAILURE = 'methodFit/client/ADD_CLIENT_FAILURE';
export const UPDATE_CLIENT_CONTACT_REQUEST = 'methodFit/client/UPDATE_CLIENT_CONTACT_REQUEST';
export const UPDATE_CLIENT_CONTACT_SUCCESS = 'methodFit/client/UPDATE_CLIENT_CONTACT_SUCCESS';
export const UPDATE_CLIENT_CONTACT_FAILURE = 'methodFit/client/UPDATE_CLIENT_CONTACT_FAILURE';
export const UPDATE_CLIENT_ADDRESS_REQUEST = 'methodFit/client/UPDATE_CLIENT_ADDRESS_REQUEST';
export const UPDATE_CLIENT_ADDRESS_SUCCESS = 'methodFit/client/UPDATE_CLIENT_ADDRESS_SUCCESS';
export const UPDATE_CLIENT_ADDRESS_FAILURE = 'methodFit/client/UPDATE_CLIENT_ADDRESS_FAILURE';
export const UPDATE_CLIENT_INFO_REQUEST = 'methodFit/client/UPDATE_CLIENT_INFO_REQUEST';
export const UPDATE_CLIENT_INFO_SUCCESS = 'methodFit/client/UPDATE_CLIENT_INFO_SUCCESS';
export const UPDATE_CLIENT_INFO_FAILURE = 'methodFit/client/UPDATE_CLIENT_INFO_FAILURE';
export const CLIENT_REQUEST = 'methodFit/client/CLIENT_REQUEST';
export const CLIENT_SUCCESS = 'methodFit/client/CLIENT_SUCCESS';
export const CLIENT_FAILURE = 'methodFit/client/CLIENT_FAILURE';
export const CLIENT_LIST_REQUEST = 'methodFit/client/CLIENT_LIST_REQUEST';
export const CLIENT_LIST_SUCCESS = 'methodFit/client/CLIENT_LIST_SUCCESS';
export const CLIENT_LIST_FAILURE = 'methodFit/client/CLIENT_LIST_FAILURE';


const clientReducer = (map = new Map, client = {}) => {
  map.set(client.id,client);
  return map;
};


export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_CLIENT_REQUEST:
    case CLIENT_REQUEST:
    case CLIENT_LIST_REQUEST: {
      console.log('ADD_CLIENT_REQUEST');
      return state;
    }
    case CLIENT_SUCCESS: {
      let m = new Map();
      for(let obj of state) {
        if (obj && obj.id) {
            m.set(obj.id, obj);
        }
      }
      clientReducer(m, action.payload);
      return [...m.values()];
    }
    case CLIENT_LIST_SUCCESS: {
      let m = new Map();
      for(let obj of state) {
        if (obj && obj.id) {
          m.set(obj.id, obj);
        }
      }
      action.payload.reduce((prev, item) => { return clientReducer(prev, item) }, m);
      return [...m.values()];
    }
    case ADD_CLIENT_SUCCESS: {
      var insertedItem = selectn('payload.insertedItem', action);
      insertedItem.id = selectn('payload.result.handlerResult.clientId',action);

      return insertedItem.id ? [...state, {contact: denormalizeContact(insertedItem)}] : state;
    }
    case UPDATE_CLIENT_INFO_FAILURE:
    case ADD_CLIENT_FAILURE: {
      return state;
    }

    case UPDATE_CLIENT_INFO_SUCCESS: {
      let update = selectn('payload.update', action);

      return state.map(x => {
        if(x.id === update.id) {
          return {...x, contact: {...x.contact, firstName: update.firstName, lastName: update.lastName}}
        }
        return x;
      });
    }

    case UPDATE_CLIENT_CONTACT_SUCCESS: {
      let update = selectn('payload.update', action);

      return state.map(x => {
        if(x.id === update.id) {
          return {...x,
            contact: {
              ...x.contact,
              secondaryPhone: update.secondaryPhone,
              mobilePhone: update.mobilePhone,
              email: update.email
            }
          }
        }
        return x;
      });
    }

    case UPDATE_CLIENT_ADDRESS_SUCCESS: {
      let update = selectn('payload.update', action);

      return state.map(x => {
        if(x.id === update.id) {
          return {...x,
            contact: {
              ...x.contact,
              address: {
                ...x.contact.address,
                street1: update.street1,
                street2: update.street2,
                city: update.city,
                state: update.state,
                zipCode: update.zipCode}
            }
          }
        }
        return x;
      });
    }

    default: {
      return state;
    }
  }
}

export function updateClientInfo(data) {
  const item = {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName
  };
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'client/updateClientInfo',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_CLIENT_INFO_REQUEST, {
        type: UPDATE_CLIENT_INFO_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.update = item
            return json
          });
        }
      },
        UPDATE_CLIENT_INFO_FAILURE]
    }
  };
}

export function updateClientContact(data) {
  const item = {
    id: data.id,
    secondaryPhone: data.secondaryPhone,
    mobilePhone: data.mobilePhone,
    email: data.email
  };

  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'client/updateClientContact',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_CLIENT_CONTACT_REQUEST, {
        type: UPDATE_CLIENT_CONTACT_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.update = item;
            return json
          });
        }
      },
        UPDATE_CLIENT_CONTACT_FAILURE]
    }
  };
}

export function updateClientAddress(data) {
  const item = {
    id: data.id,
    street1: data.street1,
    street2: data.street2,
    city: data.city,
    state: data.state ? data.state.value : undefined,
    zipCode: data.zipCode,

  };
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'client/updateClientAddress',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
      types: [UPDATE_CLIENT_ADDRESS_REQUEST, {
        type: UPDATE_CLIENT_ADDRESS_SUCCESS,
        payload: (a, s, r) => {
          return r.json().then(json => {
            json.update = item;
            return json
          });
        }
      },
        UPDATE_CLIENT_ADDRESS_FAILURE]
    }
  };
}

export function addClient(data) {
  data.state = data.state ? data.state.value : undefined;
  return {
    [CALL_API]: {
      endpoint: config.apiBase + 'client/addClient',
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      types: [ADD_CLIENT_REQUEST, {
        type: ADD_CLIENT_SUCCESS,
        payload: (a, s, r) => {
          browserHistory.push('/clients');
          return r.json().then(json => {
            json.insertedItem = data;
            return json
          });
        }
      },
        ADD_CLIENT_FAILURE]
    }
  };
}

export function fetchClientAction(id){
  let apiUrl = config.apiBase + 'client/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      credentials: 'include',
      types: [CLIENT_REQUEST, {type:CLIENT_SUCCESS, payload:
        (action, state, res) => res.json()},
        CLIENT_FAILURE]
    }
  };
}
// put paging sorting etc params here
export function fetchClientsAction() {
  let apiUrl = config.apiBase + 'clients';
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      credentials: 'include',
      types: [CLIENT_LIST_REQUEST, {type:CLIENT_LIST_SUCCESS, payload:
        (action, state, res) => res.json().then((json) => {
          return json.clients})},

        CLIENT_LIST_FAILURE]
    }
  };
}
