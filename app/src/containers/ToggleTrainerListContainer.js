import {connect} from 'react-redux';
import ToggleTrainerListForContainer from '../components/ToggleTrainerListForCalendar';
import { toggleTrainerListForCalendar } from './../modules/toggleTrainerListForCalendarModule';

function mapStateToProps(state) {
  return {
    items: state.trainers
      .fetch(x => !x.archived)
      .map(x=> ({name: `${x.contact.lastName}, ${x.contact.firstName.substr(0,1)}`, id:x.id}))
  };
}

export default connect(mapStateToProps, {toggleTrainerListForCalendar})(ToggleTrainerListForContainer);
