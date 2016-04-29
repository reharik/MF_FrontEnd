/**
 * Created by reharik on 4/9/16.
 */

export const menuItemClicked = (index,text, isParent) => {
    return isParent ? {
        type: 'NAV_DOWN',
        index,
        text
    }:
    {
        type: 'NAV_SELECT',
        text
    }
};

export const navBreadCrumbClicked = (index) => {
    return {
        type: 'NAV_TO',
        index
    }
};
