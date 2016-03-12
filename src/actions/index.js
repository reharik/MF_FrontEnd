/**
 * Created by reharik on 3/8/16.
 */

export const menuItemClicked = (index) => {
    return {
        type: 'NAV_DOWN',
        index
    }
};

//menu:{
//    items: [
//        {
//            name,
//            path,
//            children: array < items >
//        }
//    ],
//        path : [] < index >
//}
//}
