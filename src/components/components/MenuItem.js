/**
 * Created by reharik on 3/8/16.
 */
import React, { PropTypes } from 'react'

const MenuItem = ({ hasChildren, text, onClick }) => (
        <li className={hasChildren ? 'parentItem' : 'item'} ><a onClick={onClick} key={text}>{text}</a></li>
);

MenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default MenuItem;
