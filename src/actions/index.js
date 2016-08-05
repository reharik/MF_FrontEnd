/**
 * Created by reharik on 3/8/16.
 */

import {logoutUser, loginUser} from './authActions.js';
import {menuItemClicked, navBreadCrumbClicked} from './menuActions.js';

const actions = {
  logoutUser,
  loginUser,
  menuItemClicked,
  navBreadCrumbClicked
};

module.exports = actions;
