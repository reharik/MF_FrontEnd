import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

const DisplayFor = ({data, displayStyle}) => {

  const span = function () {
    switch (data['x-input'] || data.type) {
      case 'color-picker':
      {
        return (<span
          className="display__container__value display__container__value__color"
          style={{backgroundColor: data.value}} />)
      }
      case 'date-time':
      {
        return (<span className="display__container__value">{moment(data.value).format('MM/DD/YYYY')}</span>)
      }
      case 'multi-select': {
        return (
          <ul>
            {data.value && data.value.forEach(x => (<li>{x}</li>))}
          </ul>
        )
      }
      default:
      {
        return (<span className="display__container__value">{data.value}</span>)
      }
    }
  };

  const _displayStyle = classNames('display__container', displayStyle);
  return (
    <div className={_displayStyle}>
      <label className="display__container__label"><span>{data.label}</span></label>
      {span()}
    </div>
  );
};

export default DisplayFor;
