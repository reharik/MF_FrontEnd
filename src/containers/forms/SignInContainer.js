// import {reduxForm} from 'redux-form';
// import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import schema from '../../schemas/schemas.json';
import {connect} from 'react-redux';
import {loginUser, model} from '../../modules/authModule';

// const fjs = formJsonSchema(schema.definitions.signIn);

const mapStateToProps = (state) => {
  return {
    notifs: state.notifs,
    loginUser,
    model
  }
};

const SignInContainer = connect(mapStateToProps)(SignInForm);

export default SignInContainer;
