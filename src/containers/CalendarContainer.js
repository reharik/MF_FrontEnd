import {connect} from 'react-redux';
import Calendar from '../components/Calendar';
import { RETRIEVE_TASKS_SUCCESS } from 'redux-task-calendar';
import Promise from 'bluebird';
import uuid from 'uuid';

// var   ,

const a = uuid.v4();
const b = uuid.v4();
const c = uuid.v4();
const d = uuid.v4();
const getData = function() {
  return {
    tasks: [
      {
        display: 'fuck you!1',
        startTime: '8:00 AM',
        endTime: '9:00 AM',
        date: new Date(),
        id: a,
        color: 'red'
      },
      {
        display: 'fuck you!2',
        startTime: '8:30 AM',
        endTime: '9:30 AM',
        date: new Date(),
        id: b,
        color: 'red'
      },
      {
        display: 'fuck you!3',
        startTime: '8:30 AM',
        endTime: '9:00 AM',
        date: new Date(),
        id: c,
        color: 'red'
      },
      {
        display: 'fuck you!4',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        date: new Date(),
        id: d,
        color: 'red'
      }
    ]
  };
};

const retrieveData = (startDate, endDate, dispatch) => {
  var data = getData();
    dispatch({type: RETRIEVE_TASKS_SUCCESS, data});
};

const mapStateToProps = function(state) {
  return {
    config: {
      increment: 15,
      retrieveDataAction: retrieveData
    }
  }
};

export default connect(mapStateToProps)(Calendar);

