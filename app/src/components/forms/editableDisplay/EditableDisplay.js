import React, { PropTypes, Component } from 'react';
import {Form} from 'freakin-react-forms';
import EDFooter from './EDFooter.js';

class EditableDisplay extends Component {

  componentWillMount() {
    this.shouldRefresh = 0;
    this.setState({
      editing: false,
      model: this.addOriginal({...this.props.model})
    });
  }

  toggleEdit = (rollBack) => {
    this.shouldRefresh = rollBack ? this.shouldRefresh + 1 : 0;
    this.setState({
      editing: !this.state.editing,
      model: rollBack ? this.resetOriginal(this.state.model) : this.state.model
    })
  };

  resetOriginal = (model) => {
    Object.keys(model).forEach(x => {
      model[x].value = model[x].originalValue
    });
    return model;
  };

  addOriginal = (model) => {
    Object.keys(model).forEach(x => {
      model[x].originalValue = model[x].value
    });
    return model;
  };

  setEditing = (children, editing) => {
    return React.Children.map(children, x => {
      if (!x.props) {
        return x;
      }
      if (x.props.frfProperty) {
        return React.cloneElement(x, {editing});
      }
      let clonedItems = this.setEditing(x.props.children, editing);
      return React.cloneElement(x, {children: clonedItems});
    });
  };

  render() {
    return (
      <div className="editableDisplay">
        <div className="editableDisplay__header">
          <label className="editableDisplay__header__label">{this.props.sectionHeader}</label>
        </div>
        <div className="editableDisplay___content">
          <Form key={this.shouldRefresh} submitHandler={x => this.props.submitHandler(x)} model={this.state.model}
                formName={this.props.formName}
                className="editableDisplay__content__form">
            {this.setEditing(this.props.children, this.state.editing)}
            <div className="editableDisplay__footer">
              {this.state.editing ?
              <div>
              <button type="submit" className="editableDisplay__footer__button"> Submit</button>
              <button onClick = {() => this.toggleEdit(true)}>Cancel</button> </div>
                : ( <a className="editableDisplay__footer_edit" onClick={() => this.toggleEdit()}>edit</a>)
              }
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default EditableDisplay;
