import { connect } from 'react-redux'
import { navDown } from '../actions'
import SlidingNavigation from '../components/SlidingNavigation'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const getCurrentItems = (items, path) => {
    return path.reduce(function(i, key) {
        return i[key].children;
    }, items)
};

const mapStateToProps = (state) => {
    return {
        items: getCurrentItems(state.menuItems, state.menuPath)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuItemClick: (item) => {
            if(item.children){
                dispatch(navDown(item))
            }else{
                dispatch(navigateTo(item.path))
            }
        }
    }
}

const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(SlidingNavigation);

export default Navigation