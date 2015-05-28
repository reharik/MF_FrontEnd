"use strict";
var React = require("react");

var Authentication = require("../mixins/authentication");

module.exports = React.createClass({
  displayName: "Add Trainer",
  mixins: [Authentication],
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, "Add Trainer")
      )
    );
  }
});
