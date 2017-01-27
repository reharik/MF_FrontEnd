import {connect} from 'react-redux';
import Calendar from '../components/Calendar';
import { fetchAppointmentsAction, updateTaskViaDND } from './../modules';
import { fetchClientsAction } from './../modules/clientModule';
import { fetchTrainersAction } from './../modules/trainerModule';


const mapStateToProps = function(state) {
  return {
    config: {
      increment: 15,
      calendarName: 'schedule',
      dataSource: 'appointments'
    }
  }
};

export default connect(mapStateToProps, { 
  fetchClientsAction, 
  fetchTrainersAction,
  retrieveDataAction:fetchAppointmentsAction,
  updateTaskViaDND})(Calendar);

