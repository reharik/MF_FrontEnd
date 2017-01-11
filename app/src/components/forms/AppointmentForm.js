import React from 'react';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';
import SubmissionFor from './../../containers/SubmissionForContainer';
import DisplayFor from './../formElements/elementsFor/DisplayFor';

const AppointmentForm = ({model, 
                        clients,
                        appointmentTypes,
                        times,
                        scheduleAppointment,
                        cancel }) => {
  return (
    <div className='form'>
      <Notifs containerName="appointmentForm" />
        <div className="content-inner">
          <Form submitHandler={scheduleAppointment}
                model={model} 
                className="form__content"
                formName="appointmentForm" >
            <div className="form__section__row">
              {/* logic for if admin show dropdown*/}
              <DisplayFor frfProperty={model.trainer} />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.clients} selectOptions={clients} />
            </div>
            <div className="form__section__row__single">
              <SubmissionFor frfProperty={model.appointmentType} selectOptions={appointmentTypes} />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.date} />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.startTime} selectOptions={times} />
            </div>
            <div className="form__section__row">
              <DisplayFor frfProperty={model.endTime} />
            </div>
            <div className="form__section__row">
              <SubmissionFor frfProperty={model.notes} />
            </div>

            <div className="form__footer">
              <button type="submit" className="form__footer__button">Save</button>
              <button type="reset" className="form__footer__button" onClick={cancel}>Cancel</button>
            </div>
          </Form>
        </div>
    </div>);
};

AppointmentForm.contextTypes = {
};

export default AppointmentForm;
