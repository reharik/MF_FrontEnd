import { logoutUser } from './../modules'

const loggedOutMiddleware = store => next => action => {
  // stange but api middleware uses a symbol and seems to not have to have an action.type
  if (!action.type || !action.type.includes('_FAILURE')) {
    return next(action);
  }
  store.dispatch(logoutUser());
};

export default loggedOutMiddleware;
