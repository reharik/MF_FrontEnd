import {connect} from 'react-redux';
import Calendar from '../components/Calendar';
import { retrieveData } from './../modules/appointmentModule';


const mapStateToProps = function(state) {
  return {
    config: {
      increment: 15,
      calendarName: 'schedule',
      dataSource: 'appointments',
      retrieveDataAction: retrieveData,
      updateTaskViaDND: retrieveData
    }
  }
};

export default connect(mapStateToProps)(Calendar);

