var React = require("react");
var propToLabel = require('./../../utilities/propToLabel');

const Display = (property) => (
  <div>
    <label><span>{propToLabel(property.name)}</span></label>
    <p>{property.value}</p>
  </div>
);

export default Display;
