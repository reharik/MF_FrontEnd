import {connect} from 'react-redux';
import Calendar from '../components/Calendar';
import { retrieveData } from './../modules/appointmentModule';
import { fetchClientsAction } from './../modules/clientModule';
import { fetchTrainersAction } from './../modules/trainerModule';


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

export default connect(mapStateToProps, { fetchClientsAction, fetchTrainersAction })(Calendar);

