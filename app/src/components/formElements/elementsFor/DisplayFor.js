import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

const DisplayFor = ({data, displayStyle, selectOptions}) => {
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
      case 'select': {
        if(!data.value) {
          return;
        }

        const find = selectOptions.find(y=> y.value === data.value);
        const textValue = find.display;
        return (<span className="display__container__value">{textValue}</span>)
      }
      case 'multi-select': {
        if(!data.value || selectOptions.length <=0) {
          return;
        }
        // thought about being defensive here but decided if it's not in the values then fuck it throw.
        const textValues = data.value.map(x => selectOptions.find(y =>  y.value === x).display);
        return (
          <ul>
            {textValues.map((x,i) => (<li key={i}>{x}</li>))}
          </ul>
        )
      }
      default:
      {
        return (<span className="display__container__value">{data.value.display || data.value}</span>)
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
