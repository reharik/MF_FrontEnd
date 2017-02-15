import {connect} from 'react-redux';
import {loginUser} from '../../modules/index.js';
import {LOGIN} from '../../modules/authModule';
import SignInForm from '../../components/forms/SignInForm';
import formJsonSchema from '../../utilities/formJsonSchema';
import {Form} from 'freakin-react-forms';

const mapStateToProps = (state) => {
  const model = formJsonSchema(state.schema.definitions.signIn);
  return {
    ajaxState: state.ajaxState,
    fields: model
  }
};

const SignInContainer = connect(mapStateToProps,{ loginUser })(SignInForm);

export default SignInContainer;
