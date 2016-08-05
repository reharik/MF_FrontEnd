import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuItemClicked, navBreadCrumbClicked } from './../actions/index.js';
import MenuItemList from '../components/layout/Menu/MenuItemList';

function getCurrentItems(items, path) {
  return path.reduce(function(i, key) {
    return i[key].children;
  }, items);
}

function mapStateToProps(state) {
  return {
    items: getCurrentItems(state.menu.menuItems, state.menu.path),
    path: state.menu.path,
    breadCrumbItems: state.menu.breadCrumbItems,
    currentItem: state.menu.currentItem
  };
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//        menuItemClicked: (index, text) => {
//            dispatch(menuItemClicked(index, text))
//        },
//        navBreadCrumbClicked: (index) => {
//            dispatch(navBreadCrumbClicked(index))
//        }
//    }
// }


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ menuItemClicked, navBreadCrumbClicked }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList);
