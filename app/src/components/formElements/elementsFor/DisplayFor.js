import React from 'react';
import classNames from 'classnames';

const DisplayFor = ({data, displayStyle}) => {
  const _displayStyle = classNames('display__container', displayStyle);
  return (
    <div className={_displayStyle}>
      <label className="display__container__label"><span>{data.label}</span></label>
      <span className="display__container__value">{data.value}</span>
    </div>
  );
};

export default DisplayFor;
