import React from 'react';
import InputColor from 'react-input-color';
import TokenAutocomplete from '../formElements/reactSelect/index';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import MaskedInput from 'react-maskedinput'
import classNames from 'classnames'

const _Input = ({data,
                validation,
                containerStyle,
                selectOptions,
                notifs, 
                notifSend, 
                notifDismiss}) => {

  let inputStyle = classNames({
      ['input__container__' + (data.type ? data.type : 'input')]:true,
      'input__success' : !data.invalid,
      'input__error' : data.invalid
  });

  let validationStyle = classNames({
    'input__container__validation__error' : data.errors.length > 0,
    'input__container__validation__success' : data.errors.length == 0
  });

  const _containerStyle = classNames('input__container', containerStyle);

  let validationEl = null;
  switch (validation) {
    case 'inline':
    {
      // if you use inline you'll need to adjust the height of the input container
      let val = data.errors.length > 0 ? data.error : '';
      validationEl = (<div className={validationStyle}>{val}</div>);
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

  data.label = `${data.label}${
    data.label.indexOf('*') <0 
    && data.rules.some(x=>x.rule=='required') ? '*' : ''}`;

  const input = function() {
    switch(data['x-input'] || data.type){
      case 'date-time': {
        console.log('==========data.value=========');
        console.log(data.value);
        console.log('==========END data.value=========');
        const onChange = moment => data.onChange({target:{name:data.name, value:moment}});
        return (<Datepicker selected={data.value || new moment()}
                            {...data}
                            onChange={onChange}
                            onBlur={data.onBlur}
                            className={inputStyle} />)
      }
      case 'color-picker': {
        return (<InputColor {...data} defaultValue="#345678" />)
      }
      case 'select': {
        return (<TokenAutocomplete className={inputStyle} simulateSelect={true}
                                   parseToken={ value => value.label }
                                   parseOption={ value => value.label }
                                   options={selectOptions} {...data}
                                   defaultValues={data.value || []}
                                   {...data} />)
      }
      case 'multi-select': {
        return (<TokenAutocomplete className={inputStyle}
                                   defaultValues={data.value || []}
                                   parseToken={ value => value.label }
                                   parseOption={ value => value.label }
                                   parseCustom={ value => value.label }
                                   options={selectOptions} {...data}  />);
      }
      default:
      case 'number':
      case 'password':
      case 'string': {
        const password = data['x-input'] === 'password' ? {type: "password"} : '';
        return (<input className={inputStyle}
          {...password}
                       placeholder={data.placeholder}
                       name={data.name}
                       value={data.value}
                       onChange={data.onChange}
        />)
      }
    }
  };

  return (<div className={_containerStyle} >
    <label className="input__container__label" htmlFor={data.name}>{data.label}</label>
    {input()}
    {/*{validationEl}*/}
  </div>);
};

export default _Input;




