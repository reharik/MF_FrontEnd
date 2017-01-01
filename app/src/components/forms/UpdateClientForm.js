import React from 'react';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import EditableFor from './../formElements/elementsFor/EditableFor';
import EditableDisplay from './editableDisplay/EditableDisplay';
import {browserHistory} from 'react-router';

const ClientForm = ({model,
  states,
  submitting,
  updateClientInfo,
  updateClientAddress,
  updateClientContact}) => {

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
          <EditableDisplay model={model}
                           submitHandler={x=>updateClientInfo(x)}
                           sectionHeader="Client Info"
                           formName="ClientInfo" >
            <div className="editableDisplay__content__form__row">
              <EditableFor frfProperty={model.firstName} />
              <EditableFor frfProperty={model.lastName} />
            </div>
          </EditableDisplay>
          <EditableDisplay model={model}
                           submitHandler={x=>updateClientContact(x)}
                           sectionHeader="Client Contact"
                           formName="ClientContact" >
            <div className="editableDisplay__content__form__row">
              <EditableFor frfProperty={model.mobilePhone} />
              <EditableFor frfProperty={model.secondaryPhone} />
            </div>
            <div className="editableDisplay__content__form__row__single">
              <EditableFor frfProperty={model.email} />
            </div>
          </EditableDisplay>
          <EditableDisplay model={model}
                           submitHandler={x=>updateClientAddress(x)}
                           sectionHeader="Client Address"
                           formName="ClientAddress" >
            <div className="editableDisplay__content__form__row">
              <EditableFor frfProperty={model.street1} />
              <EditableFor frfProperty={model.street2} />
            </div>
            <div className="editableDisplay__content__form__row">
              <EditableFor frfProperty={model.city} containerStyle="editableDisplay__content__form__row__address__city" />
              <EditableFor selectOptions={states}
                             frfProperty={model.state}
                             containerStyle="editableDisplay__content__form__row__address__state"
              />
              <EditableFor frfProperty={model.zipCode} containerStyle="editableDisplay__content__form__row__address__zip" />
            </div>
          </EditableDisplay>

        </div>
      </div>
    </div>);
};

ClientForm.contextTypes = {
};

export default ClientForm;
