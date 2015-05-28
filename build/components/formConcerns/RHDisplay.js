var React = require("react");

var RHDisplay = React.createClass({displayName: "RHDisplay",
    natEnglishFormCamelCase: function (val) {
        return val.replace(/([A-Z])/g, ' $1')
            // uppercase the first character
            .replace(/^./, function(str){ return str.toUpperCase(); })
    },

    render: function () {
        return (React.createElement("div", null, 
            React.createElement("label", null, React.createElement("span", null, this.natEnglishFormCamelCase(this.props.name))), 
            React.createElement("p", null, this.props.value)
        ))
    }
});

module.exports = RHDisplay;
