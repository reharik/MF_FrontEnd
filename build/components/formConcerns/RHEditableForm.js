var React = require("react");
var BSbutton = require("react-bootstrap").Button;
var BSWell = require("react-bootstrap").Well;
var _ = require("lodash");



var RHEditableForm = React.createClass({
    displayName:'editable form',
    propTypes:{
        onIsEditingChange: React.PropTypes.func.isRequired
    },
    handleClick(event){
        event.preventDefault();
        var refs = this.refs;
        if(event.currentTarget.name === "ok") {
            var isValid = _.all(this.props.children, function (item) {
                return !refs[item.ref].isValid || refs[item.ref].isValid()
            }.bind(this)).bind(this);
        }
        this.props.onIsEditingChange(event.currentTarget.name, isValid);
    },
    render: function () {
        if(this.props.isEditing){
            return (React.createElement(BSWell, null, 
                this.props.children, 
                React.createElement(BSButton, {bsStyle: "success", name: "ok", onClick: this.handleClick}, "Ok"), 
                React.createElement(BSButton, {bsStyle: "danger", name: "cancel", onClick: this.handleClick}, "X")
            ));
        }
        return (React.createElement(BSWell, null, 
                    this.props.children, 
                    React.createElement(BSButton, {bsStyle: "info", name: "edit", onClick: this.handleClick}, "edit")
                ))
    }
});

module.exports = RHEditableForm;

