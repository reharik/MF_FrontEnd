/**
 * Created by reharik on 3/11/16.
 */
var React = require("react");

import {Nav, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

const UserProfileHeader = ({userName, logoutUser}) => (
    <span id='login-links'>
        <Link className='first' id='userSettings' to="profile">{userName}</Link>
        <a href="" onClick={logoutUser}> Sign out </a>
    </span>
);

export default UserProfileHeader;