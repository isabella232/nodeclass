"use strict"; // run code in ES5 strict mode

var Class = require("../../../lib/index.js").Class,
    assert = require("assert");

module.exports = new Class({
    someNumber: 2,
    someString: "hello",
    initCalled: false,
    init: function () {
        this.initCalled = true;
    },
    isInitCalled: function () {
        return this.initCalled;
    },
    "?sayHello": Function
});