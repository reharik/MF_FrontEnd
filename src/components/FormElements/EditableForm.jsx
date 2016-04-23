var React = require("react");

import {Button, Well} from 'react-bootstrap';

const EditableForm = ({isEditing, formSubmitted, formCanceled, editFormCmd, children}) => {
    if(isEditing){
        return (<Well>
            {children}
            <Button bsStyle='success' name="ok" onClick={formSubmitted}>Ok</Button>
            <Button bsStyle='danger' name="cancel" onClick={formCanceled}>X</Button>
        </Well>);
    }
    return (<Well>
        {children}
        <Button bsStyle='info' name="edit" onClick={editFormCmd}>edit</Button>
    </Well>)
};

//
//
//
//var RHEditableForm = React.createClass({
//    displayName:'editable form',
//    propTypes:{
//        onIsEditingChange: React.PropTypes.func.isRequired
//    },
//    handleClick(event){
//        event.preventDefault();
//        var refs = this.refs;
//        if(event.currentTarget.name === "ok") {
//            var isValid = _.all(this.props.children, function (item) {
//                return !refs[item.ref].isValid || refs[item.ref].isValid()
//            }.bind(this)).bind(this);
//        }
//        this.props.onIsEditingChange(event.currentTarget.name, isValid);
//    },
//
