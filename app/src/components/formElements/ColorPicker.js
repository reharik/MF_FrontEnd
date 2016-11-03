//"use strict";

import React from 'react';
import propToLabel from './../../utilities/propToLabel';
import {actions as notifActions} from 'redux-notifications';
const {notifSend, notifDismiss} = notifActions;
import InputColor from 'react-input-color';

const _Input = ({property, type, label, placeholder, validation, containerStyle, dispatch}) => {

  let _label = propToLabel(label || property.name);
  let val = property.touched && property.error ? property.error : ' ';
  let valStyle = property.touched && property.error
    ? 'input__container__validation__error'
    : 'input__container__validation__success';
  let validationEl;
  switch (validation) {
    case 'inline': {
      validationEl = (<div className={valStyle}>{val}</div>);
      break;
    }
    case 'top': 
    default: {
        if (property.touched && property.dirty && property.error) {
        dispatch(notifSend({
          id: property.name,
          message: property.error,
          kind: 'danger'
        }));
      } else if (property.touched && !property.error) {
        dispatch(notifDismiss(property.name));
      }
    }
  }

  const _containerStyle =  containerStyle ? containerStyle : '';

  return (<div className={"input__container " + _containerStyle} >
    <label className="input__container__label" htmlFor={property.name}>{_label}</label>
    <InputColor {...data} defaultValue="#345678" />
    {validationEl}
  </div>);
};

export default _Input;
