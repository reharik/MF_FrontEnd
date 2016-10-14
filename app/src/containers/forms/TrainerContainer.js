import {connect} from 'react-redux';
import TrainerForm from '../../components/forms/TrainerForm';
// import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/schemas.json';
import states from './../../constants/states'
import { createNewTrainer } from './../../modules/trainerModule';

// const fjs = formJsonSchema(schema.definitions.trainer);

const model = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    rules: [{rule:'required'}]
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name',
    rules: [{rule:'required'}]
  }
];

const mapStateToProps = (state) => {
  return {
    notifs: state.notifs,
    model,
    states,
    createNewTrainer
  }
};

const TrainerContainer = connect(mapStateToProps)(TrainerForm);

export default TrainerContainer;
