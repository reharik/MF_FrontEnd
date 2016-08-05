//"use strict";

import React from 'react';
import propToLabel from './../../utilities/propToLabel';
import { actions } from 'redux-notifications';
const { notifSend } = actions;

const _Input = ({property, type, label, placeholder, validation, dispatch}) => {

  var _label = propToLabel(label || property.name);
  var _placeholder = propToLabel(placeholder || _label);
  var validationState = property.touched ? property.invalid ? {validationState: 'input__error'} : {validationState: 'input__success'} : null;
  var style = "input__container__" + (type ? type : 'input');
  var val = property.touched && property.error ? property.error : " ";
  var valStyle = property.touched && property.error
    ? 'input__container__validation__error'
    : 'input__container__validation__success';
var valy;
  switch (validation) {
    case "inline": {
      valy = (<div className={valStyle}>{val}</div>);
      break;
    }
    case 'top': {

      // notifSend({
      //   message: 'hello world',
      //   kind: 'info'
      // })(dispatch);
      break;
    }

  }


  return (<div className="input__container" {...validationState}>
    <label className="input__container__label" htmlFor={property.name}>{_label}</label>
    <input className={style} type={type ? type :'text'} placeholder={_placeholder} {...property} />
    { valy }
  </div>)
};

export default _Input;
