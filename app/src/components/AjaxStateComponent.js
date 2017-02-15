import React, {PropTypes} from 'react';

const updateFields = (errors, fields, formName) => {
  if(!errors || errors.length<=0){
    return fields;
  }

  errors.forEach(x=> {
    let prop = fields[x.property];

    if(prop) {
      prop.hack = Math.random();
      prop.inValid = true;
      prop.errors.push({fieldName: x.property,
        formName,
        message : x.message});
    }
  });
  return {...fields};
};

export const handleNewState = (old, newState, type, fields, formName) => {
  var result = {update: false};
  var newAjaxState = getAjaxState(newState, type);
  var currentAjaxState= getAjaxState(old, type);

  if(newAjaxState &&  currentAjaxState && newAjaxState.type !== currentAjaxState.type){
    if(newAjaxState.type === 'FAILURE'){
      result.fields = updateFields(newAjaxState.errors, fields, formName);
    }
    result.update = true;
    result.ajaxState = newAjaxState;
  }
  return result;
};

export const getAjaxStateType = (type) => {
  return type.REQUEST.substr(0,type.REQUEST.lastIndexOf('_'));
};

export const getAjaxState = (state, type) => {
  return state && state[getAjaxStateType(type)];
};

export default ({state}) => {
  return (
    <div>
      { state && state.type !=='request' ? 'loading...' : '' }
    </div>
  );
};

