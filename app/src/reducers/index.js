import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
// import { Reducers } from 'react-redux-grid';
import {reducer as notifs} from 'redux-notifications';
import { tableReducers }  from 'redux-datatable';
import { reduxTaskCalendar } from 'redux-task-calendar';
import appointments from './../modules/appointmentModule';
import local from './../modules/index';

const routerReducer = combineReducers({
  ...tableReducers,
  reduxTaskCalendar,
  appointments,
  notifs,
  ...local,
  routing
});

export default routerReducer;
