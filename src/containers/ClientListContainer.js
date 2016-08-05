/**
 * Created by reharik on 4/4/16.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuItemClicked, navBreadCrumbClicked } from './../actions';
import ClientList from '../components/ClientList';

function mapStateToProps(state) {
  return {
    items: state.menu.menuItems,
    path: state.menu.path,
    breadCrumbItems: state.menu.breadCrumbItems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    menuItemClicked: (index, text) => {
      dispatch(menuItemClicked(index, text));
    },
    navBreadCrumbClicked: index => {
      dispatch(navBreadCrumbClicked(index));
    }
  };
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ menuItemClicked, navBreadCrumbClicked }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
