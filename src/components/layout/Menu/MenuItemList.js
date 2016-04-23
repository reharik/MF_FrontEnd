/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react'
import NavBreadCrumb from './NavBreadCrumb'
import SlideTransition from './SlideTransition'
import MenuItem from './MenuItem'

const MenuItemList = ({ items, breadCrumbItems, path, menuItemClicked, navBreadCrumbClicked }) => {
    return   <div id="mf_menuContainer">
        {path.length > 0 ? <NavBreadCrumb breadCrumbItems={breadCrumbItems} navBreadCrumbClicked={navBreadCrumbClicked} /> : '' }
        {/*        <SlideTransition depth={path.length} className="items-container" direction='right'> */}
            <ul className="ccMenu fg-menu ui-corner-all fg-menu-content fg-menu-current ui-widget-content ui-helper-clearfix" >
                {items.map((item, index) =>
                    <MenuItem key={index} {...item} onClick={() => menuItemClicked(index, item.text)} />
                )}
            </ul>
        {/*</SlideTransition>*/}
    </div>;
};

//MenuItemList.propTypes = {
//    items: PropTypes.arrayOf(PropTypes.shape({
//        text: PropTypes.string.isRequired
//    }).isRequired).isRequired,
//    onMenuItemClick: PropTypes.func.isRequired
//};

export default MenuItemList
