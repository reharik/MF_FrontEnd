/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react'
import BreadCrumb from './NavBreadCrumb'
import SlideTransition from './SlideTransition'
import MenuItem from './MenuItem'

const MenuItemList = ({ path, items, onMenuItemClick }) => (
    <div class="mf_menuContainer ui-widget ui-widget-content ui-corner-all">
        {path.length > 0 ? <breadCrumb /> : null }
        <SlideTransition  className="items-container", direction='right'>
            <ul class="ui-corner-all ui-widget-content fg-menu-current" >
                {items.map((item, index) =>
                    <MenuItem key={index} {...item} onClick={() => onMenuItemClick(index, item)} />
                )}
            </ul>
        </SlideTranistion>
    </div>
);

MenuItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMenuItemClick: PropTypes.func.isRequired
};

export default MenuItemList
