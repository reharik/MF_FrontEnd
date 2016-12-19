
const EDFooter = ({editing, toggleEdit}) => {
  if (editing) {
    return (<div className="editableDisplay__footer">
      <button type="submit" className="editableDisplay__footer__button"> Submit</button>
      <button onClick={() => toggleEdit(true)}>Cancel</button>
    </div>)
  } else {
    (<button onClick={() => toggleEdit()}>edit</button>)
  }
};

export default EDFooter;
