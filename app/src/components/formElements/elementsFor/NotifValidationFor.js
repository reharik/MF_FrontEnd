

const NotifValidationFor = ({data, 
  notifSend,
  notifDismiss,
  currentErrors}) => {
  console.log('==========currentErrors=========');
  console.log(currentErrors);
  console.log('==========END currentErrors=========');
  const newErrors = [];
  const oldErrors = [...currentErrors];
  console.log('==========data.errors=========');
  console.log(data.errors[0]);
  console.log('==========END data.errors=========');
  data.errors.forEach(x => {
    const id = data.parent + '_' + data.name + '_' + x.rule;
    newErrors.push(id);
    if(!oldErrors.includes(id)) {
      notifSend({
        id,
        formName: data.parent,
        fieldName: data.name,
        rule: x.rule,
        message: x.message,
        kind: 'danger'
      });
    }
  });
console.log('==========newErrors=========');
console.log(newErrors);
console.log('==========END newErrors=========');
  oldErrors
    .filter(x=> newErrors.indexOf(x) === -1)
    .forEach(x=>{
      console.log('==========x=========');
      console.log(x);
      console.log('==========END x=========');
      notifDismiss(x)
    });

    return newErrors;

  // if(data.errors.length <= 0){

  // need to dismiss any where theere was an error but it's been fixed so it's no longer in the list of errors
  // perhaps dispmiss an id for each rule not in the errors
  // notifs.filter(n => n.fieldName === data.name
  // && n.formName === data.formName
  // && !data.errors.some(e => e.rule === n.rule))
  //   .forEach(n => notifDismiss(n.id))
  // }
  // get state of notifications to determine if we should dispatch
  // } else if (!data.error) {
  //   // dispatch(notifDismiss(data.name));

};

export default NotifValidationFor;