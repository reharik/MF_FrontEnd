
import { combineReducers } from 'redux'

import menu from './menu';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
    menu,
    auth,
    routing: routerReducer
});

export default reducer;