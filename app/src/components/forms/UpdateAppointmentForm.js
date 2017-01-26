import React, {Component}from 'react';
import {Notifs} from 'redux-notifications';
import EditableDisplay from './../../components/forms/editableDisplay/EditableDisplay';
import DisplayFor from './../formElements/elementsFor/DisplayFor';
import HiddenFor from './../formElements/elementsFor/HiddenFor';
import EditableFor from './../formElements/elementsFor/EditableFor';
import moment from 'moment'
import {Form} from 'freakin-react-forms';

class AppointmentForm extends Component {

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    // this.props.notifClear('appointmentForm');
    if (this.props.apptId) {
      this.props.fetchAppointmentAction(this.props.apptId);
    }
  }

  handleTimeChange(e) {
    const syncApptTypeAndTime = (apptType, startTime) => {
      const time = moment(startTime,'hh:mm A');
      let endTime;
      if(apptType === 'halfHour'){
        endTime = time.add(30, 'm');
      }
      if(apptType === 'fullHour' || apptType === 'pair'){
        endTime = time.add(60, 'm');
      }
      return endTime.format('h:mm A');
    };
      const endTime = syncApptTypeAndTime(this.state.fields.appointmentType.value, e.target.value);
      this.state.fields.startTime.onChange(e);
      this.state.fields.endTime.value = endTime;
      this.setState({...this.state.fields});
  };

  handleAppointmentTypeChange (e) {
    const syncApptTypeAndTime = (apptType, startTime) => {
      const time = moment(startTime,'hh:mm A');
      let endTime;
      if(apptType === 'halfHour'){
        endTime = time.add(30, 'm');
      }
      if(apptType === 'fullHour' || apptType === 'pair'){
        endTime = time.add(60, 'm');
      }
      return endTime.format('h:mm A');
    };
    const endTime = syncApptTypeAndTime(e.target.value, this.state.fields.startTime.value );
    this.state.fields.appointmentType.onChange(e);
    this.state.fields.endTime.value = endTime;
    this.setState({...this.state.fields});
  };

  submitHandler = (fields) => {
    const result = Form.prepareSubmission(fields);
    if(result.formIsValid){
      result.fields.trainer = result.fields.trainer.id;
      this.props.updateAppointment(result.fields);
      this.props.cancel();
    }
    return result;
  };

  render() {
    // const model = this.state.fields;
    return (
      <div className='form'>
        <EditableDisplay model={this.props.model}
                         submitHandler={this.submitHandler}
                         overrideSubmit={true}
                         sectionHeader="Appointment Info"
                         formName="ApointmentInfo">
          <div className="editableDisplay__content__form__row">
            <HiddenFor data="id" />
            <DisplayFor data="trainer" />
             {/* logic for if admin show dropdown*/}
          </div>
          <div className="editableDisplay__content__form__row">
            <EditableFor data="clients" selectOptions={this.props.clients}/>
          </div>
          <div className="editableDisplay__content__form__row">
            <EditableFor data="appointmentType"
                         selectOptions={this.props.appointmentTypes}
                         bindChange={this.handleAppointmentTypeChange}/>
          </div>
          <div className="editableDisplay__content__form__row">
            <EditableFor data="date"/>
          </div>
          <div className="editableDisplay__content__form__row">
            <EditableFor data="startTime"
                         selectOptions={this.props.times}
                         bindChange={this.handleTimeChange}/>
          </div>
          <div className="editableDisplay__content__form__row">
            <DisplayFor data="endTime" />
          </div>
          <div className="editableDisplay__content__form__row">
            <EditableFor data="notes"/>
          </div>
        </EditableDisplay>
      </div>);
  };
}

export default AppointmentForm;