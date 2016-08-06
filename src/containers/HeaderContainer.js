import {connect} from 'react-redux';
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


export default connect(mapStateToProps, {logoutUser})(Header);
