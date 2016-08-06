/**
 * Created by reharik on 4/4/16.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutUser} from './../actions/authActions.js';
import Header from './../components/layout/Header';


function mapStateToProps(state) {
  return {
    userName: state.auth.userName
  };
}
//
//const mapDispatchToProps = (dispatch) => {
//    return {
//        menuItemClicked: (index, text) => {
//            dispatch(menuItemClicked(index, text))
//        },
//        navBreadCrumbClicked: (index) => {
//            dispatch(navBreadCrumbClicked(index))
//        }
//    }
//}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({logoutUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
