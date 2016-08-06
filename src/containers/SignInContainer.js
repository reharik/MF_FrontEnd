import {reduxForm} from 'redux-form';
import {loginUser} from './../actions/authActions.js';
import SignInForm from './../components/layout/SignInForm';
import formJsonSchema from './../utilities/formJsonSchema';
import schema from './../schemas/signInModel.json';

const fjs = formJsonSchema(schema);

const SignInContainer = reduxForm({
  form: 'login',
  fields: fjs.fields,
  validate: fjs.validate,
  onSubmit: loginUser
})(SignInForm);

export default SignInContainer;
