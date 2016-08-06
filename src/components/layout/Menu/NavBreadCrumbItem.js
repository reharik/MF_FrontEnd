/**
 * Created by reharik on 3/12/16.
 */
/**
 * Created by reharik on 3/12/16.
 */
import React, {PropTypes} from 'react';

const NavBreadCrumbItem = ({text, position, onClick}) => {
  if (position === 'last') {
    return <li className="menu__breadcrumb__item">
      <a className="menu__breadcrumb__item__link">{text}</a>
    </li>;
  } else {
    return <li><a onClick={onClick}>{text}</a><span className="ui-icon"></span></li>;
  }
};
export default NavBreadCrumbItem;
