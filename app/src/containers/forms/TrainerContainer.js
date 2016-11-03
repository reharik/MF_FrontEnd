import {connect} from 'react-redux';
import TrainerForm from '../../components/forms/TrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import states from './../../constants/states'
import { createNewTrainer } from './../../modules/trainerModule';


const mapStateToProps = (state) => {
  const model = formJsonSchema(state.schema.definitions.trainer);
  return {
    model,
    states
  }
};

const TrainerContainer = connect(mapStateToProps, { createNewTrainer })(TrainerForm);

export default TrainerContainer;
