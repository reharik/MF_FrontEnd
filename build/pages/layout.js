var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Jumbotron = require("react-bootstrap").Jumbotron;
var Nav = require("react-bootstrap").Nav;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var DropdownButton = require("react-bootstrap").DropdownButton;

var ReactRouterBootstrap = require('react-router-bootstrap');
var ButtonLink = ReactRouterBootstrap.ButtonLink;

var Luxxor = require("./../services/luxxor");

var Layout = React.createClass({displayName: "Layout",
  mixins: [Luxxor.FluxMixin,Luxxor.StoreWatchMixin("authStore")],
  getStateFromFlux: function(){return{}},
  render: function() {
    var authStore = this.getFlux().store("authStore");
    if (!authStore.isLoggedIn()) {
      return (
        React.createElement(Jumbotron, null, 
          React.createElement("div", {className: "container"}, 
            React.createElement(RouteHandler, null)
          )
        )
      );
    }
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Row, null, 
          React.createElement(Col, {md: 2}, 
            React.createElement(Nav, {bsStyle: "pills", stacked: true}, 
              React.createElement(DropdownButton, {className: "btn btn-default", title: "Clients", stacked: true}, 
                React.createElement(Nav, {bsStyle: "pills", stacked: true}, 
                  React.createElement(ButtonLink, {to: "client-list"}, "List Clients"), 
                  React.createElement(ButtonLink, {to: "add-client"}, "Add Client")
                )
              ), 
                React.createElement(DropdownButton, {className: "btn btn-default", title: "Trainers", stacked: true}, 
                    React.createElement(Nav, {bsStyle: "pills", stacked: true}, 
                        React.createElement(ButtonLink, {to: "trainer-list"}, "List Trainers"), 
                        React.createElement(ButtonLink, {to: "add-trainer"}, "Add Trainer")
                    )
                )
            )
          ), 
          React.createElement(Col, {md: 10, className: "well"}, 
            React.createElement(RouteHandler, null)
          )
        )
      )
    );
  }
});

module.exports = Layout;
