/**
 * Created by rharik on 5/3/16.
 */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
//
// import 'css/bootstrap.css';
// import 'css/form.less';
// import 'css/header.less';
// import 'css/leftNav.less';
// import 'css/menu.less';
// import 'css/content-header.less';
// import 'css/signIn.less';
// import 'css/react-grid.less';
// import 'css/main.less';
// import './css/main.css';
//require('./css/slidingNav2.css');
// import './less/CC.css';
// import './less/mf.css';
//import './less/fg.menu.css';
import './css/index.css';




const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
