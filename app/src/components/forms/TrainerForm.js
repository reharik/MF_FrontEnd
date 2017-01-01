import React from 'react';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import SubmissionFor from './../../containers/SubmissionForContainer';
import {browserHistory} from 'react-router';

const TrainerForm = ({model,
  states,
  submitting,
  hireTrainer}) => {
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
          <Form submitHandler={x=>hireTrainer(x)} model={model} className="form__content">
            <div className="form__section__header">
              <label className="form__section__header__label">Contact Info</label>
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.firstName} validation="top" />
              <SubmissionFor frfProperty={model.lastName} validation="top" />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.mobilePhone} />
              <SubmissionFor frfProperty={model.secondaryPhone} />
            </div>
            <div className="form__section__row__single">
              <SubmissionFor frfProperty={model.email} />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.street1} />
              <SubmissionFor frfProperty={model.street2} />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.city} containerStyle="form__section__row__address__city" />
              <SubmissionFor selectOptions={states}
                     frfProperty={model.state}
                     containerStyle="form__section__row__address__state"
                     />
              <SubmissionFor frfProperty={model.zipCode} containerStyle="form__section__row__address__zip" />
            </div>
            <div className="form__section__header">
              <label className="form__section__header__label">Trainer Info</label>
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.birthDate}/>
              {/*<SubmissionFor frfProperty={model.defaultClientRate} /> */}
              <SubmissionFor frfProperty={model.color} />
            </div>
            <div className="form__footer">
              <button type="submit" className="form__footer__button">
               Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>);
};

TrainerForm.contextTypes = {
};

export default TrainerForm;
