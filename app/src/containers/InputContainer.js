import {connect} from 'react-redux';
import Input from './../components/formElements/Input';
import {actions as notifActions} from 'redux-notifications';
const {notifSend, notifDismiss} = notifActions;

const mapStateToProps = (state, props) => {
  console.log('==========props=========');
  console.log(props);
  console.log('==========END props=========');
  return {
    notifs: state.notifs,
    ...props
  }
};

const InputContainer = connect(mapStateToProps, { notifSend, notifDismiss })(Input);

export default InputContainer;
