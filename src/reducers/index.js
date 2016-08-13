import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {routerReducer as routing} from 'react-router-redux';
// import { Reducers } from 'react-redux-grid';
import {reducer as notifReducer} from 'redux-notifications';
import {tableReducers}  from 'redux-datatable';
import { calendarReducers } from 'redux-task-calendar';

import menu from './menuReducer';
import auth from './authReducer';

const routerReducer = combineReducers({
    ...tableReducers,
  ...calendarReducers,
  notifs: notifReducer,
  menu,
  auth,
  routing,
  form
});

export default routerReducer;
