


const propToLabel = function (val) {
    return val.replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); });
};

export default propToLabel;