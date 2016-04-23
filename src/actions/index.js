/**
 * Created by reharik on 3/8/16.
 */

import {logoutUser, loginUser} from './authActions.js';
import {menuItemClicked, navBreadCrumbClicked} from './menuActions.js';
import { Reducers } from 'react-redux-grid';
import { combineReducers } from 'redux';

export default combineReducers({
    Reducers,
    logoutUser,
    loginUser,
    menuItemClicked,
    navBreadCrumbClicked
    });
