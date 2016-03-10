/**
 * Created by reharik on 3/8/16.
 */

export const navDown = (index) => {
    return {
        type: 'NAV_DOWN',
        index,
        item
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
