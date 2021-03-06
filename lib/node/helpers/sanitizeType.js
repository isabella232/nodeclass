"use strict"; // run code in ES5 strict mode

/**
 * @param {String} key
 * @param {*} value
 * @throws {TypeError}
 * @return {*}
 */
function sanitizeType(key, value) {
    if (value !== null && typeof value === "object") {
        throw new TypeError("(nodeclass) Invalid type of attribute '" + key + "': " +
            "Expected a primitive type, instead saw '" + Object.prototype.toString.call(value).slice(8, -1) + "'.\n" +
            "Use the 'init'-function for non-primitive attributes.");
    }
    if (value === undefined) {
        value = null;
    }

    return value;
}

module.exports = sanitizeType;