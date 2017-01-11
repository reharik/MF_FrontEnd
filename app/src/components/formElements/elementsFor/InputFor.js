import React from 'react';
import InputColor from 'react-input-color';
import TokenAutocomplete from '../reactSelect/index';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import classNames from 'classnames'

const InputFor = ({data,
                selectOptions}) => {

  let inputStyle = classNames({
    ['editor__container__' + (data.type ? data.type : 'input')]: true,
    'editor__success': !data.invalid,
    'editor__error': data.invalid
  });

  const input = function () {
    switch (data['x-input'] || data.type) {
      case 'date-time':
      {
        const onChange = moment => data.onChange({target: {name: data.name, value: moment.toISOString()}});
        return (<Datepicker selected={data.value ? moment(data.value) : moment()}
          {...data}
                            onChange={onChange}
                            onBlur={data.onBlur}
                            className={inputStyle}/>)
      }
      case 'color-picker':
      {
        const onChange = color => data.onChange({target: {name: data.name, value: color}});
        data.value = data.value || "#345678";
        return (<InputColor {...data} defaultValue={data.value} onChange={onChange}/>)
      }
      case 'select':
      {
        // const onChange = option => data.onChange({target: {name: data.name, value: option.target.value}});
        const selected = selectOptions.find(x=>x.value === data.value);
        return (<TokenAutocomplete className={inputStyle} simulateSelect={true}
                                   parseToken={ value => value.label || value }
                                   parseOption={ value => value.label || value }
                                   options={selectOptions} {...data}
                                   defaultValues={selected || []}
                                   filterOptions={true}
                                   {...data} />)
      }
      case 'multi-select':
      {
        const selected = data.value ? data.value.map(x=> selectOptions.find(y=>y.value ===x)) : [];
        return (<TokenAutocomplete className={inputStyle}
                                   defaultValues={selected}
                                   limitToOptions={true}
                                   parseToken={ value => value.label }
                                   parseOption={ value => value.label }
                                   options={selectOptions} {...data}  />);
      }
      case 'textArea': {
        return (<textarea className={inputStyle}
                       placeholder={data.placeholder}
                       name={data.name}
                       value={data.value}
                       onChange={data.onChange} />)
      }
      default:
      case 'number':
      case 'password':
      case 'string':
      {
        const password = data['x-input'] === 'password' ? {type: "password"} : '';
        return (<input className={inputStyle} 
                      {...password}
                       placeholder={data.placeholder}
                       name={data.name}
                       value={data.value}
                       onChange={data.onChange} />)
      }
    }
  };

  return (
    <div className="editor_input" >
      { input() }
    </div>)
};

export default InputFor;




