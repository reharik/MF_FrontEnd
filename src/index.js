import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';

import './css/index.css';
import './css/thirdParty/redux-datatable.css';
import './css/thirdParty/redux-task-calendar.css';
import './css/thirdParty/react-select.css';
import './css/thirdParty/input-color.css';
import './css/thirdParty/notif-styles.css';

// const menu = {
//   menuItems: item ? JSON.parse(item).menuItems : [],
//   path: [],
//   breadCrumbItems: ['Home'],
//   currentItem: ''
// };

// TODO these will come from api
const  menuItems = [
  {text: 'Calendar', path:'Calendar'},
  {text: 'Trainers', path:'trainers'},
  {text: 'Clients', path:'clients'}
  ];

// const  menuItems = [
//           {text: 'Animal', children: [
//                 {text: 'Land', children: [
//                       {text: 'Cheetah', path: 'Cheetah'},
//                       {text: 'Ant', path: 'Ant'}
//                   ]},
//                 {text: 'Air', children: [
//                       {text: 'Eagle', path: 'Eagle'}
//                   ]},
//                 {text: 'Water', children: [
//                       {text: 'Nessy', children: [
//                         {text: 'Nessy', path: 'Nessy'}
//                       ]}
//                   ]}
//             ]},
//           {text: 'Vegetable', children: [
//                 {text: 'Broccoli', path: 'Broccoli'},
//                 {text: 'IE6', path: 'IE6'}
//             ]},
//           {text: 'Mineral', children: [
//                 {text: 'Granite', path: 'Granite'},
//                 {text: 'Uraninite', path: 'Uraninite'}
//             ]}
//       ];

const menu = {
  menuItems,
  path: [],
  breadCrumbItems: ['Home'],
  currentItem: ''
};

const state = {auth: {isAuthenticated: true, userName: 'Raif Harik'},
  menu: menu
};

const store = configureStore(state);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
