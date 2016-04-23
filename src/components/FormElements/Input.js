//"use strict";

import React, {Component} from 'react';
import propToLabel from './../../utilities/propToLabel';
import { Input } from 'react-bootstrap';

const _Input = ({property, type, label, placeholder}) => {
    var label = propToLabel(label || property.name);
    var placeholder = propToLabel(placeholder || label);
    var bsStyle = property.touched ? property.invalid ? {bsStyle:'error'} : {bsStyle:'success'}:null;

    return (<div><Input type={type ? type :'text'}
                     label={label}
                     placeholder={placeholder}
                     {...bsStyle}
                     {...property}
                     hasFeedback />
            {property.touched && property.error && <div>{property.error}</div>}
        </div>)
    };

export default _Input;
