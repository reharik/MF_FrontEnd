import React from 'react';
// import propToLabel from './../../utilities/propToLabel';
import {actions as notifActions} from 'redux-notifications';
const {notifSend, notifDismiss} = notifActions;
import Select from 'react-select';
// import uuid from 'uuid';

const _Input = ({data, validation, containerStyle, notifs, dispatch}) => {
  let validationState = data.invalid ?  'input__success' : 'input__error';
  let style = 'input__container__' + (data.type ? data.type : 'input') + ' ' + validationState;
  let val = data.errors.length > 0 ? data.error : '';
  let valStyle = data.errors.length > 0
    ? 'input__container__validation__error'
    : 'input__container__validation__success';
  let validationEl = null;
  switch (validation) {
    case 'inline':
    {
      // if you use inline you'll need to adjust the height of the input container
      validationEl = (<div className={valStyle}>{val}</div>);
      break;
    }
    case 'top':
    default:
    {
      data.errors.forEach(x =>
        dispatch(notifSend({
          id: data.formName + '_' + data.name + '_' + x.rule,
          formName: data.formName,
          fieldName: data.name,
          rule: x.rule,
          message: x.message,
          kind: 'danger'
        })));
      // if(data.errors.length <= 0){
      notifs.filter(n => n.fieldName === data.name
      && n.formName === data.formName
      && !data.errors.some(e => e.rule === n.rule))
        .forEach(n => dispatch(notifDismiss(n.id)))
    }
    // get state of notifications to determine if we should dispatch
    // } else if (!data.error) {
    //   // dispatch(notifDismiss(data.name));
  }

  const _containerStyle = containerStyle ? containerStyle : '';

  const input = function() {
    switch(data.type){
      case 'select': {
        return (<Select className={style} options={data.selectOptions} {...data} />)
      }
      case 'multi-select': {
        return (<Select className={style} options={data.selectOptions} {...data}  multi={true} />);
      }
      default:
      case 'input': {
        return (<input className={style}
                       type={data.type ? data.type : 'string'}
                       placeholder={data.placeholder}
                       name={data.name}
                       value={data.value}
                       onChange={data.onChange}
        />)
      }
    }
  };

  return (<div className={"input__container " + _containerStyle} >
    <label className="input__container__label" htmlFor={data.name}>{data.label}</label>
    {input()}
    {/*{validationEl}*/}
  </div>);
};

export default _Input;




