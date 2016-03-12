/**
 * Created by reharik on 3/11/16.
 */
"use strict";
var React = require("react");

import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Glyphicon} from 'react-bootstrap';
import { UserProfileHeader } from './UserProfileHeader';
import { SignInLink } from './SignInLink';

const Header = (isLoggedIn, userName) => (
    <Navbar inverse fixedTop >
    </Navbar>
);

module.exports = Header;