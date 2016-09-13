import {connect} from 'react-redux';
import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/schemas.json';

// const fjs = formJsonSchema(schema.definitions.signIn);

const model = () => ({
  model: [
    {
      type: 'text',
      name: 'userName',
      label: 'User Name',
      rules: [{rule: 'required'}]
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      rules: [{rule: 'required'}]
    }
  ],
  loginUser
});

const SignInContainer = connect(model)(SignInForm);

export default SignInContainer;
