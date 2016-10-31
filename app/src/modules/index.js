import authReducer from './authModule';
import schemaReducer from './schemaModule';
import menuReducer from './menuModule';

export {loginUser} from './authModule';
export {menuItemClicked, navBreadCrumbClicked } from './menuModule';

export default { auth: authReducer, menu: menuReducer, schema: schemaReducer };

