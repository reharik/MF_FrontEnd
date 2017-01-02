import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import UpdateTrainerForm from '../../components/forms/UpdateTrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { updateTrainerInfo,
  updateTrainerContact,
  updateTrainerAddress,
  updateTrainerPassword,
  fetchTrainerAction } from './../../modules/trainerModule';

class UpdateTrainerFormContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.params.trainerId) {
      this.props.fetchTrainerAction(this.props.params.trainerId);
    }
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }

    return (<UpdateTrainerForm {...this.props} />);
  }
}


const mapStateToProps = (state, props) => {
  const trainer = state.trainers.filter(x=>x.id === props.params.trainerId)[0];
  const model = formJsonSchema(state.schema.definitions.trainer, trainer);
  return {
    model,
    states
  }
};

export default connect(mapStateToProps, { updateTrainerInfo,
  updateTrainerContact,
  updateTrainerAddress,
  updateTrainerPassword,
  fetchTrainerAction })(UpdateTrainerFormContainer);
