import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignInForm from '../components/layout/SignInForm'
import {reduxForm} from 'redux-form';


////var state = {
////        signinForm: {
////            config: {
////                method : 'POST',
////                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
////            },
////            properties: {
////                username:{ name: 'User Name', value:''},
////                password:{ name: 'Password', value:''}
////            }
////        }
////}
////
////
////function mapStateToProps(state){
////    return {
////        signinForm: state.signinForm
////    }
////}
////
////function mapDispatchToProps(dispatch) {
////    return bindActionCreators({ menuItemClicked, navBreadCrumbClicked }, dispatch)
////}
////
////export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)

export default SignInForm;
