import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, apiMiddleware, createLogger()),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
