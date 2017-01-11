import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import AppointmentModal from './AppointmentModal'
import {Calendar} from 'redux-task-calendar'
import AppointmentContainer from './../containers/forms/AppointmentContainer'

class MFCalendar extends Component {
  state = {
    isOpen: false
  };

  componentWillMount() {
    this.config = {
      ...this.props.config, 
      taskClickedEvent: this.taskClickedEvent, 
      openSpaceClickedEvent:this.openSpaceClickedEvent }
  }
  
  taskClickedEvent = () => {
    this.setState({
      isOpen: true
    });
  };
  
  openSpaceClickedEvent = () => {
    this.setState({
      isOpen: true
    });
  };

  onClose = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
  };
  
  render() {
    return (
      <div id='mainCalendar'>
        <ContentHeader >
          <div className="mainCalendar__header">
            <div className="mainCalendar__header__left">
            </div>
            <div className="mainCalendar__header__center">
            </div>
            <div className="mainCalendar__header__right">
            </div>
          </div>
        </ContentHeader>
        <div className="form-scroll-inner">
          <div className="content-inner">
            <Calendar config={this.config}/>
          </div>
        </div>
        <AppointmentModal
          isOpen={this.state.isOpen}
          onClose={this.onClose}
          form={<AppointmentContainer cancel={this.onClose} />}
          title={this.props.title} />
      </div>);
  };
}

MFCalendar.contextTypes = {
  config: React.PropTypes.object
};

export default MFCalendar;
