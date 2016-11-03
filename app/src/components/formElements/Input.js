import React from 'react';
import InputColor from 'react-input-color';
// import propToLabel from './../../utilities/propToLabel';
import TokenAutocomplete from '../formElements/reactSelect/index';
// import uuid from 'uuid';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import MaskedInput from 'react-maskedinput'

const _Input = ({data,
                validation, 
                containerStyle,
                selectOptions,
                notifs, 
                notifSend, 
                notifDismiss}) => {
  console.log('==========data=========');
  console.log(data);
  console.log('==========END data=========');
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
        notifSend({
          id: data.formName + '_' + data.name + '_' + x.rule,
          formName: data.formName,
          fieldName: data.name,
          rule: x.rule,
          message: x.message,
          kind: 'danger'
        }));
      // if(data.errors.length <= 0){
      notifs.filter(n => n.fieldName === data.name
      && n.formName === data.formName
      && !data.errors.some(e => e.rule === n.rule))
        .forEach(n => notifDismiss(n.id))
    }
    // get state of notifications to determine if we should dispatch
    // } else if (!data.error) {
    //   // dispatch(notifDismiss(data.name));
  }

  const _containerStyle = containerStyle ? containerStyle : '';

  const input = function() {
    switch(data['x-input'] || data.type){
      case 'date-time': {
        const onChange = moment => data.onChange({target:{name:data.name, value:moment}});
        return (<Datepicker selected={data.value || moment()}
                            {...data}
                            onChange={onChange}
                            onBlur={data.onBlur}
                            className={style} />)
      }
      case 'color-picker': {
        return (<InputColor {...data} defaultValue="#345678" />)
      }
      case 'select': {
        return (<TokenAutocomplete className={style} simulateSelect={true}
                                   parseToken={ value => value.label }
                                   parseOption={ value => value.label }
                                   options={selectOptions} {...data}
                                   defaultValues={data.value || []}
                                   {...data} />)
      }
      case 'multi-select': {
        return (<TokenAutocomplete className={style}
                                   defaultValues={data.value || []}
                                   parseToken={ value => value.label }
                                   parseOption={ value => value.label }
                                   parseCustom={ value => value.label }
                                   options={selectOptions} {...data}  />);
      }
      default:
      case 'number':
      case 'string': {
        return (<input className={style}
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




