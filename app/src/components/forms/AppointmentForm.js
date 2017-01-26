import React, {Component}from 'react';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';
import SubmissionFor from './../../containers/SubmissionForContainer';
import DisplayFor from './../formElements/elementsFor/DisplayFor';
import moment from 'moment'

class AppointmentForm extends Component {
  componentWillMount() {
    this.props.notifClear('appointmentForm');
    const fields = Form.buildModel('appointmentForm',this.props.model, {onChange: this.changeHandler});
    this.setState({fields, formIsValid: false})
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const result = Form.prepareSubmission(this.state.fields);
    this.setState(result);
    if(result.formIsValid) {
      result.fields.trainer = result.fields.trainer.id;
      this.props.scheduleAppointment(result.fields);
      this.props.cancel()
    }
  };

  changeHandler = (e) => {
    const result = Form.onChangeHandler(this.state.fields)(e);
    this.setState(result);
  };

  handleTimeChange = (e) => {
    const endTime = this.props.syncApptTypeAndTime(this.state.fields.appointmentType.value, e.target.value);
    this.state.fields.startTime.onChange(e);
    this.state.fields.endTime.value = endTime;
    this.setState({...this.state.fields});
  };

  handleAppointmentTypeChange = (e) => {
    const endTime = this.props.syncApptTypeAndTime(e.target.value, this.state.fields.startTime.value );
    this.state.fields.appointmentType.onChange(e);
    this.state.fields.endTime.value = endTime;
    this.setState({...this.state.fields});
  };

  render() {
    const model = this.state.fields;
    return (
      <div className='form'>
        <Notifs containerName="appointmentForm"/>
        <div className="content-inner">
          <form onSubmit={this.onSubmitHandler}
                className="mf__modal__form__content" >
            <div className="form__section__row">
              {/* logic for if admin show dropdown*/}
              <DisplayFor data={model.trainer}/>
            </div>
            <div className="form__section__row">
              <SubmissionFor data={model.clients} selectOptions={this.props.clients}/>
            </div>
           <div className="form__section__row">
              <SubmissionFor data={model.appointmentType}
                             selectOptions={this.props.appointmentTypes}
                             onChange={this.handleAppointmentTypeChange} />
            </div>
            <div className="form__section__row">
              <SubmissionFor data={model.date}/>
            </div>
            <div className="form__section__row">
              <SubmissionFor data={model.startTime}
                             selectOptions={this.props.times}
                             onChange={this.handleTimeChange}/>
            </div>
            <div className="form__section__row">
              <DisplayFor data={model.endTime}/>
            </div>
            <div className="form__section__row">
              <SubmissionFor data={model.notes}/>
            </div>

            <div className="mf__modal__form__footer">
              <button type="submit" className="mf__modal__form__footer__button">Save</button>
              <button type="reset" className="mf__modal__form__footer__button" onClick={this.props.cancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>);
  };
}

export default AppointmentForm;