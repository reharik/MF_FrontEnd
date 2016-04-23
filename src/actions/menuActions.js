/**
 * Created by reharik on 4/9/16.
 */

export const menuItemClicked = (index,text) => {
    return {
        type: 'NAV_DOWN',
        index,
        text
    }
};

export const navBreadCrumbClicked = (index) => {
    return {
        type: 'NAV_TO',
        index
    }
};
