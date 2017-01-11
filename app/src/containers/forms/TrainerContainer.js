import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import TrainerForm from '../../components/forms/TrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { hireTrainer, fetchTrainerAction } from './../../modules/trainerModule';
import { fetchClientsAction } from './../../modules/clientModule';
import {actions as notifActions} from 'redux-notifications';
const {notifClear} = notifActions;
import uuid from 'uuid';

class TrainerFormContainer extends Component {
  state = {reset: false};

  componentWillMount() {
    this.loadData();
  }

  componentWillReceiveProps(newProps) {
    if(this.state.reset){
      this.setState({reset:false});
    }
  }

  formReset = () => {
    this.props.notifClear('trainerForm');
    this.setState({reset:true});
  };

  loadData() {
    if (this.props.params.trainerId) {
      this.props.fetchTrainerAction(this.props.params.trainerId);
    }
    this.props.fetchClientsAction();
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<TrainerForm formReset={this.formReset} reset={this.state.reset} {...this.props} />);
  }
}

const mapStateToProps = (state, props) => {
  const trainer = state.trainers.filter(x=>x.id === props.params.trainerId)[0];
  const clients = state.clients.map(x=> ({ value:x.id , label: `${x.contact.lastName} ${x.contact.firstName}` }));
  const model = formJsonSchema(state.schema.definitions.trainer, trainer);
  model.confirmPassword = {...model.password};
  model.confirmPassword.name  = 'confirmPassword';
  model.confirmPassword.rules = [{rule:'equalTo', compareField:'password'}];
  return {
    model,
    states,
    clients
  }
};

export default connect(mapStateToProps, { hireTrainer,
  fetchTrainerAction,
  fetchClientsAction,
  notifClear})(TrainerFormContainer);
