"use strict";
var React = require("react");

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, "Coming Soon"), 
        React.createElement("div", null, "This section is not done yet!")
      )
    );
  }
});
