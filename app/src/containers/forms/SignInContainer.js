import {connect} from 'react-redux';
import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
import formJsonSchema from '../../utilities/formJsonSchema';

const mapStateToProps = (state) => {
  var model = formJsonSchema(state.schema.definitions.signIn);
  return {
    model: model
  }
};

const SignInContainer = connect(mapStateToProps,{ loginUser })(SignInForm);

export default SignInContainer;
