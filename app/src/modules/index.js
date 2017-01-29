import authReducer from './authModule';
import schemaReducer from './schemaModule';
import menuReducer from './menuModule';
import trainerReducer from './trainerModule';
import clientReducer from './clientModule';
import toggleTrainerListForCalendar from './toggleTrainerListForCalendarModule';

export {loginUser, logoutUser} from './authModule';
export {menuItemClicked, navBreadCrumbClicked } from './menuModule';
export {scheduleAppointment,
        fetchAppointmentAction,
        fetchAppointmentsAction,
  updateTaskViaDND} from './appointmentModule';

export default { 
  auth: authReducer, 
  menu: menuReducer, 
  schema: schemaReducer, 
  trainers: trainerReducer, 
  clients: clientReducer ,
  toggleTrainerListForCalendar
};

