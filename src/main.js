"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers,applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import api from './middleware/api';
import reducer from './reducers/'
import routes from './routes.js';
import DevTools from './containers/DevTools.js'

// import './less/main.css';
require('./css/bootstrap.css');
import 'css/form.less';
import 'css/header.less';
import 'css/leftNav.less';
import 'css/menu.less';
import 'css/content-header.less';
import 'css/signIn.less';
import 'css/react-grid.less';
import 'css/main.less';

//require('./less/slidingNav2.css');
// import './less/CC.css';
// import './less/mf.css';
//import './css/fg.menu.css';

var middlewares = [thunk, api];

//if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`);
    const logger = createLogger();
    middlewares.push(logger);
//}

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(...middlewares),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);
const store = createStore(reducer,enhancer);

//if (module.hot) {
//    module.hot.accept('../reducers', () =>
//            store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
//    );
//}

//const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                {routes}
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
