import authReducer from './authModule';

import menuReducer from './menuModule';
export {loginUser} from './authModule';

export default { auth: authReducer, menu: menuReducer };

