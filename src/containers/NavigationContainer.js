import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { menuItemClicked } from './../actions'
import MenuItemList from '../components/MenuItemList'

function getCurrentItems(items, path){
    return path.reduce(function(i, key) {
        return i[key].children;
    }, items)
}

function mapStateToProps(state){
    console.log('==========state2=========');
    console.log(state.menu.path);
    console.log('==========ENDstate2=========');
    return {
        items: getCurrentItems(state.menu.menuItems, state.menu.path),
        path: state.menu.path
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ menuItemClicked }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList)
