/**
 * Created by reharik on 3/8/16.
 */

const menuItems = (state = [], action = null) => {
    switch (action.type) {
        case 'NAV_DOWN':
            return [
                ...state,
                action.index
            ];
        default:
            return state;
    }
};
export default menuItems;
