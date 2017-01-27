import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import {apiMiddleware} from 'redux-api-middleware';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
//thunk used for notif
import thunk from 'redux-thunk';
import loggedOutMiddleware from './../utilities/loggedOutMiddleware';
import createSagaMiddleware from 'redux-saga'
import requestSaga from './../sagas/requestSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, sagaMiddleware, apiMiddleware, loggedOutMiddleware, createLogger()),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(requestSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
