import {connect} from 'react-redux';
import {navDown} from '../modules/index';
import Layout from '../components/layout/Layout';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.userName
  };
}

export default connect(mapStateToProps)(Layout);


//componentDidMount() {
//    // from the path `/inbox/messages/:id`
//    const id = this.props.params.id
//
//    fetchMessage(id, function (err, message) {
//        this.setState({ message: message })
//    })
//},
//
//// ...
//
//})