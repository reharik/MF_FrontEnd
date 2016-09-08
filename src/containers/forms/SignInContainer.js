// import {reduxForm} from 'redux-form';
// import {loginUser} from '../../modules/index.js';
import SignInForm from '../../components/forms/SignInForm';
// import formJsonSchema from '../../utilities/formJsonSchema';
// import schema from '../../schemas/schemas.json';
import {connect} from 'react-redux';

// const fjs = formJsonSchema(schema.definitions.signIn);

const SignInContainer = connect()(SignInForm);

export default SignInContainer;
