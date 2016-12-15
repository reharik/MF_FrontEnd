import React from 'react';
import classNames from 'classnames'
import InputFor from './InputFor';
import LabelFor from './LabelFor';
import NotifValidationFor from './NotifValidationFor';

const SubmissionFor = ({data,
  containerStyle,
  notifs,
  notifSend,
  notifDismiss,
  noLabel,
  selectOptions}) => {

  const _containerStyle = classNames('editor__container', containerStyle);

  NotifValidationFor({data, notifs, notifSend, notifDismiss});

  return (<div className={_containerStyle}>
    {noLabel
      ? null
      : LabelFor({data})}
    {InputFor({data, selectOptions})}
  </div>);
};

export default SubmissionFor;




  