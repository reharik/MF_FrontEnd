import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import AppointmentForm from '../../components/forms/AppointmentForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import { scheduleAppointment, fetchAppointmentAction } from './../../modules/appointmentModule';
import appointmentTypes from './../../constants/appointmentTypes';
import { generateAllTimes } from './../../utilities/appointmentTimes'; 


class AppointmentContainer extends Component {
  componentWillMount() { this.loadData(); }

  // componentWillReceiveProps(newProps) { this.loadData(); }

  loadData() {
    if (this.props.apptId) {
      this.props.fetchAppointmentAction(this.props.apptId);
    }
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<AppointmentForm {...this.props} />);
  }
}

const mapStateToProps = (state, props) => {
  const appointment = state.appointments.filter(x=>x.id === props.apptId)[0];
  const model = formJsonSchema(state.schema.definitions.appointment, appointment);
  const clients = state.clients.map(x=> `${x.lastName}, ${x.firstName}`);
  const times = generateAllTimes(30);
  return {
    model,
    clients,
    appointmentTypes,
    times,
    cancel: props.cancel
  }
};

export default connect(mapStateToProps, { scheduleAppointment, fetchAppointmentAction })(AppointmentContainer);
