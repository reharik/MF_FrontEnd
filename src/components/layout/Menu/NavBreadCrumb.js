/**
 * Created by reharik on 3/12/16.
 */
import React, { PropTypes } from 'react'
import NavBreadCrumbItem from './NavBreadCrumbItem'

const NavBreadCrumb = ({ breadCrumbItems, navBreadCrumbClicked }) => (
    < ul className = "fg-menu-breadcrumb ui-widget-header ui-corner-all ui-helper-clearfix fg-menu-header"  >
        {breadCrumbItems.map((item, index) =>
            <NavBreadCrumbItem
                key={index}
                text={item}
                onClick={() => navBreadCrumbClicked(index)}
                position={index==breadCrumbItems.length-1 ? 'last' : index==0 ? 'first' : ''}
                />
        )}
    </ul>
);

export default NavBreadCrumb;
