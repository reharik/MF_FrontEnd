const NotifValidationFor = ({data,
  notifSend,
  notifDismiss,
  currentErrors}) => {

  const newErrors = [];
  const oldErrors = [...currentErrors];

  data.errors.forEach(x => {
    const id = data.parent + '_' + data.name + '_' + x.rule;
    newErrors.push(id);
    if(!oldErrors.includes(id)) {
      notifSend({
        id,
        containerName: data.formName,
        formName: data.parent,
        fieldName: data.name,
        rule: x.rule,
        message: x.message,
        kind: 'danger'
      });
    }
  });

  oldErrors
    .filter(x=> newErrors.indexOf(x) === -1)
    .forEach(x=>{
      notifDismiss(x)
    });

    return newErrors;
};

export default NotifValidationFor;
