import React from 'react';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import EditableFor from './../formElements/elementsFor/EditableFor';
import EditableDisplay from './editableDisplay/EditableDisplay';
import {browserHistory} from 'react-router';

const TrainerForm = ({model,
  states,
  clients,
  submitting,
  updateTrainerInfo,
  updateTrainerContact,
  updateTrainerAddress,
  updateTrainerPassword,
  updateTrainersClients}) => {
  return (
    <div className='form'>
      <ContentHeader >
        <div className="form__header">
          <div className="form__header__left" >

            <button className="contentHeader__button__new" title="New" onClick={() => browserHistory.push('/trainer')} />
          </div>
          <div className="form__header__center">
            <div className="form__header__center__title">Trainer</div>
          </div>
          <div className="form__header__right" >
          </div>
        </div>
      </ContentHeader>
      <div className="form-scroll-inner" >
        <div className="content-inner">
          <div>
            <EditableDisplay model={model}
                             submitHandler={x=>updateTrainerInfo(x)}
                             sectionHeader="Trainer Info"
                             formName="TrainerInfo" >
              <div className="editableDisplay__content__form__row">
                <EditableFor frfProperty={model.firstName} />
                <EditableFor frfProperty={model.lastName} />
              </div>
              <div className="editableDisplay__content__form__row">
                <EditableFor frfProperty={model.birthDate} />
                <EditableFor frfProperty={model.color} />
              </div>
            </EditableDisplay>
            <EditableDisplay model={model}
                             submitHandler={x=>updateTrainerContact(x)}
                             sectionHeader="Trainer Contact"
                             formName="TrainerContact" >
              <div className="editableDisplay__content__form__row">
                <EditableFor frfProperty={model.mobilePhone} />
                <EditableFor frfProperty={model.secondaryPhone} />
              </div>
              <div className="editableDisplay__content__form__row__single">
                <EditableFor frfProperty={model.email} />
              </div>
            </EditableDisplay>
            <EditableDisplay model={model}
                             submitHandler={x=>updateTrainerAddress(x)}
                             sectionHeader="Trainer Address"
                             formName="TrainerAddress" >
              <div className="editableDisplay__content__form__row">
                <EditableFor frfProperty={model.street1} />
              </div>
              <div className="editableDisplay__content__form__row">
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
            <EditableDisplay model={model}
                             submitHandler={x=>updateTrainerPassword(x)}
                             sectionHeader="Trainer Password"
                             formName="TrainerPassword" >
              <div className="editableDisplay__content__form__row">
                <EditableFor frfProperty={model.password} noDisplay="true" />
              </div>
              <div className="editableDisplay__content__form__row">
                <EditableFor frfProperty={model.confirmPassword} noDisplay="true" />
              </div>
            </EditableDisplay>
          </div>
          <div>
            <EditableDisplay model={model}
                             submitHandler={x=>updateTrainersClients(x)}
                             sectionHeader="Trainer's Clients"
                             formName="TrainersClients" >
              <div className="editableDisplay__content__form__row">
                <EditableFor
                  selectOptions={clients}
                  frfProperty={model.clients} />
              </div>
            </EditableDisplay>
          </div>
        </div>
      </div>
    </div>);
};

TrainerForm.contextTypes = {
};

export default TrainerForm;
