import {connect} from 'react-redux';
import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
// import formJsonSchema from '../../utilities/formJsonSchema';
// import schema from '../../schemas/schemas.json';

// const fjs = formJsonSchema(schema.definitions.signIn);

const model = [
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
  ];

const mapStateToProps = (state) => {
  return {
    notifs: state.notifs,
    loginUser,
    model
  }
};
const SignInContainer = connect(mapStateToProps)(SignInForm);

export default SignInContainer;
