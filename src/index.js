/**
 * Created by rharik on 5/3/16.
 */

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import './less/bootstrap.css';
import './less/form.less';
import './less/header.less';
import './less/leftNav.less';
import './less/menu.less';
import './less/content-header.less';
import './less/signIn.less';
import './less/react-grid.less';
import './less/main.less';
// import './less/main.css';
//require('./less/slidingNav2.css');
// import './less/CC.css';
// import './less/mf.css';
//import './less/fg.menu.css';




const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)
