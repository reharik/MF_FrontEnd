let jsen = require('jsen');

function buildValidationFn(schema, onErrorEvent = ()=>{}) {
  let validate = jsen(schema, {greedy: true});
  return _formValues => {
console.log('==========_formValues=========');
console.log(_formValues);
console.log('==========END _formValues=========');

    let formValues = _formValues;
    let errors = {};
    //required says that the property is there not that the value length > 0
    Object.keys(formValues).forEach(k => {
      if (!formValues[k]) {
        formValues[k] = undefined;
      }
    });

    let valid = validate(formValues);

    console.log('==========validate=========');
    console.log(validate);
    console.log('==========END validate=========');

    if (valid) {
      return errors;
    }

    let errs = validate.errors;
    errs.forEach(x=> {
      errors[x.path] = x.message || x.keyword;
      onErrorEvent(x);
    });
    return errors;
  };
}

export default schema => {
  const fields = Object.keys(schema.properties);
  const validate = buildValidationFn(schema);
  return {
    fields,
    validate
  };
};
