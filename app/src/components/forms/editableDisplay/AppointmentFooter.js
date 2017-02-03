import React from 'react';

const AppointmentFooter = ({editing, toggleEdit, params}) => {
  return (<div className="editableDisplay__footer">
    {editing ?
      <div>
        <button type="submit" className="editableDisplay__footer__button"> Submit</button>
        <button onClick={(e) => toggleEdit(e,true)}>Cancel</button>
      </div>
      : (
      <div>
        <button onClick={(e) => toggleEdit(e,false)}>Edit</button>
        <button onClick={(e) => { e.preventDefault(); params.copy(params.appointmentId); }}>Copy</button>
        <button onClick={(e) => { e.preventDefault(); 
                                  params.deleteAppointment(params.appointmentId, params.date);
                                }}>Delete
        </button>
      </div>)
    }
  </div>)
};

export default AppointmentFooter;
