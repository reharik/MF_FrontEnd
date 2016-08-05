/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react';
import NavBreadCrumb from './NavBreadCrumb';
import SlideTransition from './SlideTransition';
import MenuItem from './MenuItem';

const MenuItemList = ({ items, breadCrumbItems, path, currentItem, menuItemClicked, navBreadCrumbClicked}) => {
  return (<div id="left-navigation">
                <div id="mf_menuContainer">
                    {path.length > 0 ?
                        <NavBreadCrumb breadCrumbItems={breadCrumbItems} navBreadCrumbClicked={navBreadCrumbClicked} /> : '' }
                    {/*        <SlideTransition depth={path.length} className="items-container" direction='right'> */}
                    <ul className="items">
                        {items.map((item, index) =>
                            <MenuItem key={index} {...item} currentItem={currentItem}
                              onClick={() => menuItemClicked(index, item.text, item.children ? true : false)} />
                        )}
                    </ul>
                    {/*</SlideTransition>*/}
                </div>
            </div>);
};

//MenuItemList.propTypes = {
//    items: PropTypes.arrayOf(PropTypes.shape({
//        text: PropTypes.string.isRequired
//    }).isRequired).isRequired,
//    onMenuItemClick: PropTypes.func.isRequired
//};

export default MenuItemList;
