import authReducer from './authModule';
import schemaReducer from './schemaModule';
import menuReducer from './menuModule';
import trainerReducer from './trainerModule';
import clientReducer from './clientModule';

export {loginUser, logoutUser} from './authModule';
export {menuItemClicked, navBreadCrumbClicked } from './menuModule';

export default { auth: authReducer, menu: menuReducer, schema: schemaReducer, trainers: trainerReducer, clients: clientReducer };

