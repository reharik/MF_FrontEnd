import { logoutUser } from './../modules'

const loggedOutMiddleware = store => next => action => {
  // stange but api middleware uses a symbol and seems to not have to have an action.type
  if (action.payload && action.payload.status === 401) {
    return store.dispatch(logoutUser());
  }
  return next(action);
};

export default loggedOutMiddleware;
