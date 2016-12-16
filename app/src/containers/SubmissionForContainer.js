import {connect} from 'react-redux';
import SubmissionFor from './../components/formElements/elementsFor/SubmissionFor';
import {actions as notifActions} from 'redux-notifications';
const {notifSend, notifDismiss} = notifActions;

const mapStateToProps = (state, props) => {
  return {
    ...props
  }
};

const SubmissionForContainer = connect(mapStateToProps, { notifSend, notifDismiss })(SubmissionFor);

export default SubmissionForContainer;
