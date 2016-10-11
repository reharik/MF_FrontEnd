import authReducer from './authModule';

import menuReducer from './menuModule';
export {loginUser} from './authModule';
export {menuItemClicked, navBreadCrumbClicked } from './menuModule';

export default { auth: authReducer, menu: menuReducer };

