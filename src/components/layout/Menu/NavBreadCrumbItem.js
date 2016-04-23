/**
 * Created by reharik on 3/12/16.
 */
/**
 * Created by reharik on 3/12/16.
 */
import React, { PropTypes } from 'react'

const NavBreadCrumbItem = ({ text, position, onClick }) => (
    <li className={ position=='first' ? "fg-menu-all-lists" : position=='last' ? 'fg-menu-current-crumb' : ''}>
        <a className='fg-menu-crumb'  onClick={position!='last' ? onClick : ''} >{text}</a>
        {position!='last' ? <span className="ui-icon ui-icon-carat-1-e"></span>:''}
    </li>
);

export default NavBreadCrumbItem