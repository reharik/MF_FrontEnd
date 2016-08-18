//"use strict";

import React from 'react';
import propToLabel from './../../utilities/propToLabel';
import {actions as notifActions} from 'redux-notifications';
const {notifSend, notifDismiss} = notifActions;
import Select from 'react-select';
import uuid from 'uuid';

const _Input = ({property, type, label, placeholder, validation, containerStyle, selectOptions, dispatch}) => {

  let _label = propToLabel(label || property.name);
  let _placeholder = propToLabel(placeholder || _label);
  let validationState = property.touched ? property.invalid ? 'input__error' : 'input__success' : '';
  let style = 'input__container__' + (type ? type : 'input') + ' ' + validationState;
  let val = property.touched && property.error ? property.error : ' ';
  let valStyle = property.touched && property.error
    ? 'input__container__validation__error'
    : 'input__container__validation__success';
  let validationEl = null;
  switch (validation) {
    case 'inline': {
      // if you use inline you'll need to adjust the height of the input container
      validationEl = (<div className={valStyle}>{val}</div>);
      break;
    }
    case 'top':
    default: {
      if (property.touched && property.error) {
        dispatch(notifSend({
          id: property.name,
          message: property.error,
          kind: 'danger'
        }));
      } else if (property.touched && property.dirty && !property.error) {
        dispatch(notifDismiss(property.name));
      }
    }
  }

  const _containerStyle =  containerStyle ? containerStyle : '';

  const input = function() {
    switch(type){
      case 'select': {
        return (<Select className={style} options={selectOptions} {...property}  onBlur={() => {}} />)
      }
      case 'multi-select': {
        return (<Select className={style} options={selectOptions} {...property}  multi={true} onBlur={() => {}} />);
      }
      default:
      case 'input': {
        return (<input className={style} type={type ? type : 'text'}  placeholder={_placeholder} {...property} />)
      }
    }
  };
  
  return (<div className={"input__container " + _containerStyle} >
    <label className="input__container__label" htmlFor={property.name}>{_label}</label>
    {input()}
    {validationEl}
  </div>);
};

export default _Input;
