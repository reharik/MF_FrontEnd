var React = require("react");
var Router = require("react-router");

var NotFound = React.createClass({
  displayName: "NotFoundPage",
  contextTypes: { router: React.PropTypes.func.isRequired },

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "404 ", React.createElement("small", null, "| Page Not Found")), 
        React.createElement("p", null, "Sorry the following path"), 
        React.createElement("pre", null,  this.context.router.getCurrentPath()), 
        React.createElement("p", null, "does not exist on this site"), 
        React.createElement("p", null, "Are you sure you have the right url?")
      )
    );
  }
});

module.exports = NotFound;
