import {connect} from 'react-redux';
import {raifValidation} from './raifValidation'
export default raifForm = function(config, mapStateToProps, mapDispatchToProps) {


  const validate = '';
  const onChange = '';
  const onBlur = '';
  let isValid = '';
  let errorMessage = '';
  let touched = '';

  config.fields.map(x =>{
    let _label = propToLabel(x.name);
    let _placeholder = propToLabel(_label);
    let validationState = property.touched ? property.invalid ? 'input__error' : 'input__success' : '';
    let inputStyle = 'input__container__input' + (type ? type : 'text') + ' ';

  })
}
