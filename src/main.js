"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducer from './reducers'
var routes = require('./routes.jsx');

require('./less/slidingNav2.css');
require('./less/bootstrap.css');



const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                {routes}
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
