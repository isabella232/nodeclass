"use strict"; // run code in ES5 strict mode

// This file ends on .web to trigger webpack to prefer this file over index.js
// @see https://github.com/sokra/modules-webpack#options

exports.is = require("metaclass/lib/helpers/is.js");
exports.isEach = require("metaclass/lib/helpers/is.js");
exports.Class = function (Class) {
    return Class;
};
// Used for logging output. You can override this for other logging options.
exports.stdout = function (txt) {
    console.log(txt);
};