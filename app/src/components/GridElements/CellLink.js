/**
 * Created by reharik on 4/16/16.
 */
import {Link} from 'react-router';
import React from 'react';


export default route => {
  return ({value, row}) => {
    const fullRoute = route + '/' + row['id'];
    return (
      <div>
        <Link to={fullRoute}>{value}</Link>
      </div>);
  };
};
