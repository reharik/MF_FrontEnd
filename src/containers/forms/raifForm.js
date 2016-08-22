import {connect} from 'react-redux';
import wrapMapDispatchToProps from './wrapMapDispatchToProps';
import wrapMapStateToProps from './wrapMapStateToProps';

import {raifValidation} from './raifValidation'
export default raifForm = function(config, mapStateToProps, mapDispatchToProps) {


const blur = (field, value) =>
    ({type: "BLUR", field, value});

  const change = (field, value) =>
    ({type: "CHANGE", field, value});

const actions = wrapMapDispatchToProps(mapDispatchToProps, {blur, change});
   var fields = config.fields.map(x => {
    x.onChange = actions.change;
    x.onBlur = actions.blur;
    x.isValid = true;
    return x;
  });
}
