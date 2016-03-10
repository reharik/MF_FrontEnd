import { connect } from 'react-redux'
import { navDown } from '../actions'
import SlidingNavigation from '../components/SlidingNavigation'

const getCurrentItems = (items, path) => {
    return path.reduce(function(i, key) {
        return i[key].children;
    }, items)
};

const mapStateToProps = (state) => {
    return {
        items: getCurrentItems(state.menuItems, state.menuPath),
        path: state.path
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuItemClick: (index) => {
            dispatch(navDown(index))
        }
    }
};

const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(SlidingNavigation);

export default Navigation