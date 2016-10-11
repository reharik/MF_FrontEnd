import { LOGIN_SUCCESS } from './authModule';

export const NAV_DOWN = 'methodFit/menu/NAV_DOWN';
export const NAV_SELECT = 'methodFit/menu/NAV_SELECT';
export const NAV_TO = 'methodFit/menu/NAV_TO';

const item = localStorage.getItem('menu_data');
const data = {
    menuItems: item ? JSON.parse(item).menuItems : [],
    path: [],
    breadCrumbItems: ['Home'],
    currentItem: ''
};

export default (state = data, action = {}) => {
    switch (action.type) {
        case NAV_DOWN:
            return Object.assign({}, state, {
                path: [
                    ...state.path,
                    action.index
                ],
                breadCrumbItems: [
                    ...state.breadCrumbItems,
                    action.text
                ]

            });
        case NAV_SELECT:
            return Object.assign({}, state, {
                currentItem: action.text
            });
        case NAV_TO:
            return Object.assign({}, state, {
                path: state.path.slice(0, action.index),
                breadCrumbItems: state.breadCrumbItems.slice(0, action.index + 1)
            });
        // case LOGIN_SUCCESS:
        //     const items = JSON.parse(localStorage.getItem('menu_data'));
        //     return Object.assign({}, state, {
        //         menuItems: items.menuItems
        //     });
        default:
            return state;
    }
};



export const menuItemClicked = (index, text, isParent) => {
    return isParent ? {
        type: NAV_DOWN,
        index,
        text
    } :
    {
        type: NAV_SELECT,
        text
    };
};

export const navBreadCrumbClicked = index => {
    return {
        type: NAV_TO,
        index
    };
};
