import {connect} from 'react-redux';
import TrainerForm from '../../components/forms/TrainerForm';
// import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/schemas.json';
import states from './../../constants/states'
import { createNewTrainer } from './../../modules/trainerModule';

// const fjs = formJsonSchema(schema.definitions.trainer);

const model = () => ({model:[
  {
    type: 'text',
    name: 'userName',
    label: 'User Name',
    rules: [{rule:'required'}]
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    rules: [{rule:'required'}]
  }
]});

const mapStateToProps = (state) => {
  return {
    states,
    createNewTrainer
  }
};

const TrainerContainer = connect(model, mapStateToProps)(TrainerForm);

export default TrainerContainer;
