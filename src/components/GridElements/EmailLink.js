/**
 * Created by reharik on 4/16/16.
 */
import {Link} from 'react-router';
import React from 'react'

export default  ({ column, value, row }) => (
    <div>
        <a href={"mailto:" + value}>{value}</a>
    </div>);