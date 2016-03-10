/**
 * Created by reharik on 3/8/16.
 */

const data = {
    menuItems: [
        {name: 'Animal', children: [
            {name: 'Land', children: [
                {name: 'Cheetah', path: 'Cheetah'},
                {name: 'Ant', path: 'Ant'}
            ]},
            {name: 'Air', children: [
                {name: 'Eagle', path: 'Eagle'}
            ]},
            {name: 'Water', children: [
                {name: 'Nessy', path: 'Nessy'}
            ]}
        ]},
        {name: 'Vegetable', children: [
            {name: 'Broccoli', path: 'Broccoli'},
            {name: 'IE6', path: 'IE6'}
        ]},
        {name: 'Mineral', children: [
            {name: 'Granite', path: 'Granite'},
            {name: 'Uraninite', path: 'Uraninite'}
        ]}
    ],
    path:[]
};

const menuItems = (state = data, action = null) => {
    switch (action.type) {
        case 'NAV_DOWN':
            return [
                ...state,
                //somehow push index onto state.path
                action.index
            ];
        default:
            return state;
    }
};
export default menuItems;
