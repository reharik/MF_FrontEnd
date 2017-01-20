import React, {Component} from 'react';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import EditableFor from './../formElements/elementsFor/EditableFor';
import EditableDisplay from './../../containers/EditableDisplayContainer';
import {browserHistory} from 'react-router';


class UpdateClientForm extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.params.clientId) {
      this.props.fetchClientAction(this.props.params.clientId);
    }
  }

  render() {
    return (
      <div className='form'>
        <ContentHeader >
          <div className="form__header">
            <div className="form__header__left" >

              <button className="contentHeader__button__new" title="New" onClick={() => browserHistory.push('/client')} />
            </div>
            <div className="form__header__center">
              <div className="form__header__center__title">Client</div>
            </div>
            <div className="form__header__right" >
            </div>
          </div>
        </ContentHeader>
        <div className="form-scroll-inner" >
          <div className="content-inner">
            <EditableDisplay model={this.props.model}
                             submitHandler={this.props.updateClientInfo}
                             sectionHeader="Client Info"
                             formName="ClientInfo" >
              <div className="editableDisplay__content__form__row">
                <EditableFor data="firstName" />
                <EditableFor data="lastName" />
              </div>
            </EditableDisplay>
            <EditableDisplay model={this.props.model}
                             submitHandler={this.props.updateClientContact}
                             sectionHeader="Client Contact"
                             formName="ClientContact" >
              <div className="editableDisplay__content__form__row">
                <EditableFor data="mobilePhone" />
                <EditableFor data="secondaryPhone" />
              </div>
              <div className="editableDisplay__content__form__row__single">
                <EditableFor data="email" />
              </div>
            </EditableDisplay>
            <EditableDisplay model={this.props.model}
                             submitHandler={this.props.updateClientAddress}
                             sectionHeader="Client Address"
                             formName="ClientAddress" >
              <div className="editableDisplay__content__form__row">
                <EditableFor data="street1" />
                <EditableFor data="street2" />
              </div>
              <div className="editableDisplay__content__form__row">
                <EditableFor data="city" containerStyle="editableDisplay__content__form__row__address__city" />
                <EditableFor selectOptions={this.props.states}
                             data="state"
                             containerStyle="editableDisplay__content__form__row__address__state"
                />
                <EditableFor data="zipCode" containerStyle="editableDisplay__content__form__row__address__zip" />
              </div>
            </EditableDisplay>

          </div>
        </div>
      </div>);
  }
};

export default UpdateClientForm;
