import {reduxForm} from 'redux-form';
import {raifForm} from './raifForm';
import TrainerForm from '../../components/forms/TrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/schemas.json';
import states from './../../constants/states'
import { createNewTrainer } from './../../modules/trainerModule';

const fjs = formJsonSchema(schema.definitions.trainer);

const mapStateToProps = (state) => {
  return {
    states,
    createNewTrainer
  }
};

const TrainerContainer = raifForm({
  form: 'trainer',
  fields: fjs.fields,
  validate: fjs.validation,
  onSubmit: createNewTrainer
}, mapStateToProps)(TrainerForm);

export default TrainerContainer;
