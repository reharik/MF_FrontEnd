/**
 * Created by reharik on 3/8/16.
 */

const data = {
    menuItems: [
        {text: 'Animal', children: [
            {text: 'Land', children: [
                {text: 'Cheetah', path: 'Cheetah'},
                {text: 'Ant', path: 'Ant'}
            ]},
            {text: 'Air', children: [
                {text: 'Eagle', path: 'Eagle'}
            ]},
            {text: 'Water', children: [
                {text: 'Nessy', path: 'Nessy'}
            ]}
        ]},
        {text: 'Vegetable', children: [
            {text: 'Broccoli', path: 'Broccoli'},
            {text: 'IE6', path: 'IE6'}
        ]},
        {text: 'Mineral', children: [
            {text: 'Granite', path: 'Granite'},
            {text: 'Uraninite', path: 'Uraninite'}
        ]}
    ],
    path:[]
};

const menuItems = (state = data, action = null) => {
    switch (action.type) {
        case 'NAV_DOWN':
            function getCurrentItems(items, path){
                return path.reduce(function(i, key) {
                    return i[key].children;
                }, items)
            }
            var path = [
                ...state.path,
                action.index
            ];
            var menuItems = getCurrentItems(state.menuItems, path);
            return Object.assign({}, state, {
                path,
                menuItems
            });
        default:
            return state;
    }
};
export default menuItems;
