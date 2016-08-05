/**
 * Created by reharik on 4/16/16.
 */
import {Link} from 'react-router';
import React from 'react';



export default route => {
  return ({ column, value, row }) => {
    const fullRoute = route + '/' + row['Id'];
    return (
            <div>
                <Link to={fullRoute}>{value}</Link>
            </div>);
  };
};
