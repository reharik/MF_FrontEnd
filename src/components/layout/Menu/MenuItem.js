/**
 * Created by reharik on 3/8/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MenuItem = ({children, text, onClick, path, currentItem}) => {
  if (children && children.length > 0) {
    return (<li className="tools">
      <a onClick={onClick} key={text}>{text}
        <span className="ui-icon"></span>
      </a></li>);
  }
  let selected = currentItem == text ? 'menuItem-Active' : '';
  return <li className={ 'item ' + selected} onClick={onClick}><Link to={path}>{text}</Link></li>;
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default MenuItem;
