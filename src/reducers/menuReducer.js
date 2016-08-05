/**
 * Created by reharik on 3/8/16.
 */

const item = localStorage.getItem('menu_data');
const data = {
  menuItems: item ? JSON.parse(item).menuItems : [],
  path: [],
  breadCrumbItems: ['Home'],
  currentItem: ''
};

const menuItems = (state = data, action = null) => {
  switch (action.type) {
    case 'NAV_DOWN':
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
    case 'NAV_SELECT':
      return Object.assign({}, state, {
        currentItem: action.text
      });
    case 'NAV_TO':
      return Object.assign({}, state, {
        path: state.path.slice(0, action.index),
        breadCrumbItems: state.breadCrumbItems.slice(0, action.index + 1)
      });
    case 'LOGIN_SUCCESS':
      var items = JSON.parse(localStorage.getItem('menu_data'));
      return Object.assign({}, state, {
        menuItems: items.menuItems
      });
    default:
      return state;
  }
};
export default menuItems;
