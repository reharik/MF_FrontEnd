/**
 * Created by reharik on 3/8/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MenuItem = ({children, text, onClick, path, currentItem}) => {
  if (children && children.length > 0) {
    return (<li className="menu__item__node">
      <a className="menu__item__node__link" onClick={onClick} key={text}>
        <div>{text}</div>
        <div className="menu__item__node__link__icon"></div>
      </a></li>);
  }
  let selected = currentItem == text ? 'menu__item__leaf__active' : '';
  return <li className={ 'menu__item__leaf ' + selected} onClick={onClick}>
    <Link className="menu__item__leaf__link" to={path}>{text}</Link>
  </li>;
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default MenuItem;
