"use strict";

var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var Root = require("./pages/root");
var ClientList = require("./pages/clientList");
var AddClient = require("./pages/addClient");

var TrainerList = require("./pages/trainerList");
var AddTrainer = require("./pages/addTrainer");
var ViewTrainer = require("./pages/viewTrainer");

var NotFoundPage = require("./pages/notfound");
var NullPage = require("./pages/null");
var SignInPage = require("./pages/signin");
var SignUpPage = require("./pages/signup");
var SignOut = require("./pages/signout");


var routes = (
  React.createElement(Route, {handler: Root, path: "/"}, 
    React.createElement(DefaultRoute, {name: "client-list", handler: ClientList}), 
      React.createElement(Route, {name: "add-client", path: "/addclient", handler: AddClient}), 
      React.createElement(Route, {name: "add-trainer", path: "/addTrainer", handler: AddTrainer}), 
      React.createElement(Route, {name: "view-trainer", path: "/viewTrainer", handler: ViewTrainer}), 
      React.createElement(Route, {name: "trainer-list", path: "/trainerList", handler: TrainerList}), 
    React.createElement(Route, {name: "profile", path: "/profile", handler: NullPage}), 
    React.createElement(Route, {name: "sign-in", path: "/signin", handler: SignInPage}), 
    React.createElement(Route, {name: "sign-up", path: "/signup", handler: SignUpPage}), 
    React.createElement(Route, {name: "sign-out", path: "/signout", handler: SignOut}), 
    React.createElement(NotFoundRoute, {handler: NotFoundPage})
  )
);

module.exports = routes;
