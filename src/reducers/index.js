import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {routerReducer as routing} from 'react-router-redux';
// import { Reducers } from 'react-redux-grid';
import {reducer as notifs} from 'redux-notifications';
import { tableReducers }  from 'redux-datatable';
import { calendarReducers } from 'redux-task-calendar';
import local from './../modules/index';

const routerReducer = combineReducers({
    ...tableReducers,
  ...calendarReducers,
  notifs,
    ...local,
  routing,
  form
});

export default routerReducer;
