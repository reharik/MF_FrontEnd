import {reduxForm} from 'redux-form';
import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/schemas.json';

const fjs = formJsonSchema(schema.definitions.signIn);

const SignInContainer = reduxForm({
  form: 'login',
  fields: fjs.fields,
  validate: fjs.validate,
  onSubmit: loginUser
})(SignInForm);

export default SignInContainer;
