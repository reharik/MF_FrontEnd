"use strict";
var React = require("react");
var PropTypes = React.PropTypes;

var Link = require("react-router").Link;

var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var Glyphicon = require("react-bootstrap").Glyphicon;

var ReactRouterBootstrap = require('react-router-bootstrap');
var NavItemLink = ReactRouterBootstrap.NavItemLink;

var Luxxor = require("./../services/luxxor");
var Authentication = require("../mixins/authentication");

var AppNavbar = React.createClass({
  displayName: "AppNavbar",
  propTypes: {
    brand: PropTypes.string
  },
  mixins: [Luxxor.FluxMixin, Luxxor.StoreWatchMixin("authStore"), Authentication],

  statics: {
    resolve: Luxxor.constants.AUTH.FETCH_USER
  },

  getStateFromFlux: function(){
    var store = this.getFlux().store("authStore");
    return {
      loading: store.getLoading(),
      error: store.getError(),
      user: store.getUser()
    };
  },

  renderBrand: function () {
    return (React.createElement(Link, {to: "client-list"}, this.props.brand));
  },
  renderNavLinks: function () {
    if (this.state.user) {
      return (
        React.createElement(Nav, {right: true, eventKey: 0}, 
          React.createElement(NavItemLink, {eventKey: 1, to: "profile"}, 
            React.createElement(Glyphicon, {glyph: "user"}), " ", this.state.user.username
          ), 
          React.createElement(NavItemLink, {to: "sign-out"}, 
            React.createElement(Glyphicon, {glyph: "off"}), " Sign out"
          )
        )
      );
    }
    return (
      React.createElement(Nav, {right: true, eventKey: 0}, 
        React.createElement(NavItemLink, {eventKey: 1, to: "sign-up"}, 
           React.createElement(Glyphicon, {glyph: "user"}), " Sign up"
        )
      )
    );
  },
  render: function () {
    return (
      React.createElement(Navbar, {brand: this.renderBrand(), inverse: true, fixedTop: true, toggleNavKey: this.state.user ? 0 : undefined}, 
        this.renderNavLinks()
      )
    );
  }
});

module.exports = AppNavbar;
