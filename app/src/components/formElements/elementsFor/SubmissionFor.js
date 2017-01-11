import React, {Component} from 'react';
import classNames from 'classnames'
import InputFor from './InputFor';
import LabelFor from './LabelFor';
import NotifValidationFor from './NotifValidationFor';

class SubmissionFor extends Component {
  currentErrors = [];

  componentWillReceiveProps() {
    this.currentErrors = NotifValidationFor({data: this.props.data,
      notifSend: this.props.notifSend,
      notifDismiss: this.props.notifDismiss,
      currentErrors: this.currentErrors});
  }

  render() {
    const _containerStyle = classNames('editor__container', this.props.containerStyle);

    return (<div className={_containerStyle}>
      {this.props.noLabel
        ? null
        : LabelFor({data: this.props.data})}
      {InputFor({data: this.props.data, selectOptions: this.props.selectOptions, onChange: this.props.onChange})}
    </div>);
  }
}

export default SubmissionFor;
