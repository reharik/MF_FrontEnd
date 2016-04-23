
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';

import menu from './menuReducer';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux'
import { Reducers } from 'react-redux-grid';

const reducer = combineReducers({
    ...Reducers,
    menu,
    auth,
    routing: routerReducer,
    form: formReducer
});

export default reducer;