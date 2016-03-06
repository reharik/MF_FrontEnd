"use strict";

var React = require("react");
var Navbar = require("./components/slidingNav");
//var Layout = require("./layout");

var Root = React.createClass({
  displayName: "Root",
  getStateFromStores: function(){
    return{
    };
  },

  render: function () {
    return (
      <div>
        <Navbar brand="Method Fitness"  />
        <Layout  />
      </div>
    );
  }
});

module.exports = Root;
