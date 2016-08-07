import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
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

// const menu = {
//   menuItems: item ? JSON.parse(item).menuItems : [],
//   path: [],
//   breadCrumbItems: ['Home'],
//   currentItem: ''
// };

// TODO these will come from api
const  menuItems = [
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
