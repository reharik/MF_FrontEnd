import {connect} from 'react-redux';
import Calendar from '../components/Calendar';
import Promise from 'bluebird';
import uuid from 'uuid';


const mapStateToProps = function(state) {
  return {
    increment: 15
  }
};

export default connect(mapStateToProps)(Calendar);

