var React = require("react");
var RHDisplay = require('./RHDisplay.jsx');
var RHInput = require('./RHInput.jsx');



var RHEditableElement = React.createClass({displayName: "RHEditableElement",
    getValue:function(){
        return this.refs[this.props.name].getValue();
    },
    isValid: function(){
        return this.refs[this.props.name].isValid();
    },
    render: function () {
        if(this.props.isEditing){
            return (React.createElement(RHInput, {type: "text", name: this.props.name, ref: this.props.name, value: this.props.value, validators: this.props.validators}))
        }
        return (React.createElement(RHDisplay, {name: this.props.name, value: this.props.value}))
    }
});

module.exports = RHEditableElement;
 
