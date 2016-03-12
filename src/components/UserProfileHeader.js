/**
 * Created by reharik on 3/11/16.
 */
var React = require("react");

import {Nav, Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const UserProfileHeader = (username) => (
    <Nav right >
        <LinkContainer  to="profile">
            <Glyphicon glyph="user" /> {username}
        </LinkContainer>
        <LinkContainer to="sign-out">
            <Glyphicon glyph="off" /> Sign out
        </LinkContainer>
    </Nav>
);

export default UserProfileHeader;