/**
 * Created by reharik on 3/11/16.
 */
'use strict';
let React = require('react');

import UserProfileHeader from './UserProfileHeader';

const Header = ({userName, logoutUser}) => (
    <div id="main-header" >
        <UserProfileHeader userName={userName} logoutUser={logoutUser} />
    </div>
);

module.exports = Header;
