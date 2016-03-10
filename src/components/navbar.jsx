"use strict";
var React = require("react");
var PropTypes = React.PropTypes;

var Link = require("react-router").Link;

var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var Glyphicon = require("react-bootstrap").Glyphicon;

var ReactRouterBootstrap = require('react-router-bootstrap');
var NavItemLink = ReactRouterBootstrap.NavItemLink;

var Authentication = require("./authentication");
var authStore = require('./authStore');

var AppNavbar = React.createClass({
  displayName: "AppNavbar",
  propTypes: {
    brand: PropTypes.string
  },
  mixins: [authStore.mixin, Authentication],

  getStateFromStores: function(){
    return {
      loading: authStore.getLoading(),
      error: authStore.getError(),
      user: authStore.getUser()
    };
  },

  renderBrand: function () {
    return (<Link to="client-list">{this.props.brand}</Link>);
  },
  renderNavLinks: function () {
    if (this.state.user) {
      return (
        <Nav right eventKey={0}>
          <NavItemLink eventKey={1} to="profile">
            <Glyphicon glyph="user" /> {this.state.user.username}
          </NavItemLink>
          <NavItemLink to="sign-out">
            <Glyphicon glyph="off" /> Sign out
          </NavItemLink>
        </Nav>
      );
    }
    return (
      <Nav right eventKey={0}>
        <NavItemLink eventKey={1} to="sign-up">
           <Glyphicon glyph="user" /> Sign up
        </NavItemLink>
      </Nav>
    );
  },
  render: function () {
    return (
      <Navbar brand={this.renderBrand()} inverse fixedTop toggleNavKey={this.state.user ? 0 : undefined}>
        {this.renderNavLinks()}
      </Navbar>
    );
  }
});

module.exports = AppNavbar;