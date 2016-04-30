//"use strict";

import React, {Component} from 'react';
import propToLabel from './../../utilities/propToLabel';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const _Input = ({property, type, label, placeholder}) => {
    var label = propToLabel(label || property.name);
    var placeholder = propToLabel(placeholder || label);
    var validationState = property.touched ? property.invalid ? {validationState:'error'} : {validationState:'success'}:null;

    return (
            <FormGroup controlId="formControlsText" {...validationState}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type={type ? type :'text'} placeholder={placeholder} {...property} />
                {property.touched && property.error && <div>{property.error}</div>}
            </FormGroup>

)
    };

export default _Input;
