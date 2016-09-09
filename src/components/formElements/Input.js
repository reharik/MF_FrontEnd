//"use strict";

import React from 'react';
import propToLabel from './../../utilities/propToLabel';
import {actions as notifActions} from 'redux-notifications';
const {notifSend, notifDismiss} = notifActions;
import Select from 'react-select';
import uuid from 'uuid';

const _Input = ({handleValueChange, type, label, placeholder, fieldState, formState, validation, containerStyle, selectOptions, dispatch}) => {
  let _label = label || propToLabel(fieldState.field.name);
  let _placeholder = placeholder || _label;
  let validationState = fieldState.isInvalid() ? 'input__error' : 'input__success';
  let style = 'input__container__' + (type ? type : 'input') + ' ' + validationState;
  let val = fieldState.isInvalid() ? fieldState.getMessage() : ' ';

  let valStyle = fieldState.isInvalid()
    ? 'input__container__validation__error'
    : 'input__container__validation__success';
  let validationEl = null;
  switch (validation) {
    case 'inline': {
      // if you use inline you'll need to adjust the height of the input container
      if(fieldState.isInvalid()) {
        validationEl = (<div className={valStyle}>{val}</div>);
      }
      break;
    }
    case 'top':
    default: {
      let context = formState.createUnitOfWork();
      let fi = context.getFieldState(fieldState.getName());

      let errors = fi.get('errors') || [];

      if (fieldState.isInvalid() && !errors.some(x=>x.id === fieldState.field.name)) {
        console.log('==========fieldState=========');
        console.log(fieldState);
        console.log('==========END fieldState=========');
        var errorAction = {
          id: fieldState.field.name,
          message: val,
          kind: 'danger'
        };
        errors.push(errorAction);
        dispatch(notifSend(errorAction));
        fi.set('errors', errors)
        context.updateFormState();
      }
      if (!fieldState.isInvalid() && errors.length>0) {
        dispatch(notifDismiss(fieldState.field.name));
      }
    }
  }

  const _containerStyle =  containerStyle ? containerStyle : '';

  // const blur = e => {
  //   dispatch()
  // }



  const input = function() {
    switch(type){
      // case 'select': {
      //   return (<Select className={style} options={selectOptions} {...property}  onBlur={() => {}} />)
      // }
      // case 'multi-select': {
      //   return (<Select className={style} options={selectOptions} {...property}  multi={true} onBlur={() => {}} />);
      // }
      default:
      case 'input': {
        return (<input value={fieldState.getValue()}
                       onChange={ e => handleValueChange(e.target.value) }
                       className={style} type={type ? type : 'text'}
                       placeholder={_placeholder}
                       onBlur={e=>blur(e)} />)
      }
    }
  };

  return (<div className={"input__container " + _containerStyle} >
    <label className="input__container__label" htmlFor={fieldState.field.name}>{_label}</label>
    {input()}
    {validationEl}
  </div>);
};

export default _Input;
