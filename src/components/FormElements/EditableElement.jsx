var React = require("react");
var RHDisplay = require('./Display.jsx');
var RHInput = require('./Input.js');


var RHEditableElement = React.createClass({
  getValue: function () {
    return this.refs[this.props.name].getValue();
  },
  isValid: function () {
    return this.refs[this.props.name].isValid();
  },
  render: function () {
    if (this.props.isEditing) {
      return (<RHInput type='text' name={this.props.name} ref={this.props.name} value={this.props.value}
                       validators={this.props.validators}/>)
    }
    return (<RHDisplay name={this.props.name} value={this.props.value}/>)
  }
});

module.exports = RHEditableElement;

