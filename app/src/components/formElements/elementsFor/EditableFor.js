import React, {Component} from 'react';
import SubmissionFor from './../../../containers/SubmissionForContainer';
import DisplayFor from './DisplayFor'

const EditableFor = (props) => {
  if (props.editing) {
    return <SubmissionFor {...props} />
  }
  return <DisplayFor {...props}/>
};

export default EditableFor;




  