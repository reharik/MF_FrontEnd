import React, { PropTypes, Component } from 'react';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';
import EDFooter from './EDFooter.js';
import {actions as notifActions} from 'redux-notifications';

class EditableDisplay extends Component {

  componentWillMount() {
    const fields = Form.buildModel(this.props.formName, this.props.model, {onChange: this.changeHandler});
    this.setState({fields, formIsValid: false, editing: false});
  }

  componentWillReceiveProps(newProps) {
    if(!this.state.editing) {
        const fields = Form.buildModel(newProps.formName, newProps.model, {onChange: this.changeHandler});
        this.setState({fields});
    }
  }

  toggleEdit = (e,rollBack) => {
    e.preventDefault();
    if (rollBack) {
      this.props.notifClear && this.props.notifClear(this.props.formName);
      const fields = Form.buildModel(this.props.formName, this.props.model, {onChange: this.changeHandler});
      this.setState({fields, editing: !this.state.editing});
    }else {
      this.setState({
        editing: !this.state.editing
      })
    }
  };

  setEditing = (children, editing, fields) => {
    return React.Children.map(children, x => {
      if (!x.props) {
        return x;
      }
      if (x.props.data) {
        const data = fields[x.props.data];
        if(x.props.bindChange){
          return React.cloneElement(x, {editing, data:data, onChange: x.props.bindChange.bind(this)});
        }
        return React.cloneElement(x, {editing, data:data});
      }
      let clonedItems = this.setEditing(x.props.children, editing, fields);
      return React.cloneElement(x, {children: clonedItems});
    });
  };

  changeHandler = (e) => {
    const result = Form.onChangeHandler(this.state.fields)(e);
    this.setState(result);
  };
  
  submitHandler = (e) => {
    e.preventDefault();
    const result = Form.trySubmitForm(this.state.fields, this.props.submitHandler);
    this.setState({...result, editing: !result.formIsValid});
  };

  render() {
    return (
      <div className="editableDisplay">
        <div className="editableDisplay__header">
          <label className="editableDisplay__header__label">{this.props.sectionHeader}</label>
        </div>
        <div className="editableDisplay___content">
          <Notifs containerName={this.props.formName}/>
          <form onSubmit={this.submitHandler} className="editableDisplay__content__form">
            {this.setEditing(this.props.children, this.state.editing, this.state.fields)}
            <div className="editableDisplay__footer">
              {this.state.editing ?
                <div>
                  <button type="submit" className="editableDisplay__footer__button"> Submit</button>
                  <button onClick={(e) => this.toggleEdit(e,true)}>Cancel</button>
                </div>
                : ( <a className="editableDisplay__footer_edit" onClick={(e) => this.toggleEdit(e, false)}>edit</a>)
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditableDisplay;
