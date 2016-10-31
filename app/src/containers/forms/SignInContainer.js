import {connect} from 'react-redux';
import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
import formJsonSchema from '../../utilities/formJsonSchema';

const mapStateToProps = (state) => {
  return {
    notifs: state.notifs,
    loginUser,
    model: formJsonSchema(state.schema.definitions.signIn)

  }
};

const SignInContainer = connect(mapStateToProps)(SignInForm);

export default SignInContainer;
