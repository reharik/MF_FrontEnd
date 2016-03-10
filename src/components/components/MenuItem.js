/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react'

const MenuItem = ({ hasChildren, text, onClick, path }) => (
    if (hasChildren) {
        return <li className="item" ><a onClick={onClick)} key={text}>{text}</a></li>;
    }
    return <li className="item" ><link to={path}>{text}</link></li>;
)

MenuItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default MenuItem;
