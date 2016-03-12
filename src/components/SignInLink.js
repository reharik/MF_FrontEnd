/**
 * Created by reharik on 3/11/16.
 */

var React = require("react");

import {Nav, Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const SignInLink = () => (
    <Nav right >
        <LinkContainer to="sign-up">
            <Glyphicon glyph="user" /> Sign In
        </LinkContainer>
    </Nav>
);

export default SignInLink;