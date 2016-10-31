
const flat = (r, a) => {
  if (!Array.isArray(a)) {
    if (!r.some(x=>a.name === x.name)) {
      r.push(a);
    }
    return r;
  }
  return a.reduce(flat, r);
};

const mapProperty = (parent, propertyName) => (
  {...parent.properties[propertyName],
    name: propertyName,
    parent: parent.title,
    rules:[] }
);

const mapRules = (parent, property) => {
  if (parent.required && parent.required.some(x=> x === property.name)) {
    property.rules.push({rule: 'required'});
  }
  // schemaRules.foreach(r => r(property));
  return property;
};

export default function(schema) {
  if(!schema) { return; }
  const recurseProps = parent => {
    return Object.keys(parent.properties).map(p => {
      if (parent.properties[p].type !== 'object' && !parent.properties[p].properties) {
        return mapRules(parent, mapProperty(parent, p));
      }
      return recurseProps(parent.properties[p]);
    });
  };
  return recurseProps(schema).reduce(flat,[]);
};

/*
  format:
    date-time,
    email,
    hostname,
    ipv4,
    ipv6,
    url,
    uuid*
  numbers:
    multipleOf,
    maximum(exclusiveMaximum),
    minimum(exclusiveMinimum)
  string:
    maxLength,
    minLength,
    pattern,
  array:
    maxItems,
    minItems,
    uniqueItems,


 */
