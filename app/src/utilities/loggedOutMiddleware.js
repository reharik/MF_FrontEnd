import { logoutUser } from './../modules'

const loggedOutMiddleware = store => next => action => {
q  if (action.message && action.message.status === 401) {
    return store.dispatch(logoutUser());
  }
  return next(action);
};

export default loggedOutMiddleware;
