/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const MenuItem = ({ children, text, onClick, path }) => {
    if (children && children.length>0) {
        return <li className="tools" >
            <a className='ui-corner-all fg-menu-indicator' onClick={onClick} key={text}>{text}
                <span className="ui-icon ui-icon-triangle-1-e"></span>
            </a></li>;
    }
    return <li className="item" ><Link to={path}>{text}</Link></li>;
};

MenuItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default MenuItem;
