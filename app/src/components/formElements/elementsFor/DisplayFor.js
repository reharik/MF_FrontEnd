import React from 'react';

const DisplayFor = ({data, displayStyle}) => {
  const _displayStyle = classNames('editor__container', displayStyle);

  return (
    <div className={_displayStyle}>>
      <label><span>{data.label}</span></label>
      <p>{data.value}</p>
    </div>
  );
};

export default DisplayFor;
