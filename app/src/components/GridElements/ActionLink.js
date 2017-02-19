import React from 'react';

export default action => {
  return ({value, row}) => {
    return (
      <div onClick={e=> action({id:row.id, archived:value})} className="list__cell__link">
        <span>{value?'Unarchive' : 'Archive'}</span>
      </div>);
  };
};
