/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react'
//import BreadCrumb from './NavBreadCrumb'
import SlideTransition from './SlideTransition'
import MenuItem from './MenuItem'
//{path.length > 0 ? <breadCrumb /> : null }

const MenuItemList = ({ items, menuItemClicked }) => {
    return   <div className="mf_menuContainer ui-widget ui-widget-content ui-corner-all">
            <ul className="ui-corner-all ui-widget-content fg-menu-current" >
                {items.map((item, index) =>
                    <MenuItem key={index} {...item} onClick={() => menuItemClicked(index)} />
                )}
            </ul>
    </div>
;}

//MenuItemList.propTypes = {
//    items: PropTypes.arrayOf(PropTypes.shape({
//        text: PropTypes.string.isRequired
//    }).isRequired).isRequired,
//    onMenuItemClick: PropTypes.func.isRequired
//};

export default MenuItemList
