
const Display = ({data, displayStyle}) => {

  return (<span className={displayStyle}
                name={data.name}
                 value={data.value} />);
};

export default Display;