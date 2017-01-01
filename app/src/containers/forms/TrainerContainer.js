import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import TrainerForm from '../../components/forms/TrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { hireTrainer, fetchTrainerAction } from './../../modules/trainerModule';


class TrainerFormContainer extends Component {
  componentWillMount() { this.loadData(); }

  // componentWillReceiveProps(newProps) { this.loadData(); }

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
    return (<TrainerForm {...this.props} />);
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

export default connect(mapStateToProps, { hireTrainer, fetchTrainerAction })(TrainerFormContainer);
