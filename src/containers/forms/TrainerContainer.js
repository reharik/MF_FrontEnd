import {reduxForm} from 'redux-form';
import {submitTrainer} from '../../actions/trainerModule.js';
import TrainerForm from '../../components/forms/TrainerForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/trainerSchema.json';

const fjs = formJsonSchema(schema);

const SignInContainer = reduxForm({
  form: 'trainer',
  fields: fjs.fields,
  validate: fjs.validate,
  onSubmit: submitTrainer
})(TrainerForm);

export default SignInContainer;
