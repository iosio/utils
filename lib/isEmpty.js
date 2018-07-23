(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './typeOf'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./typeOf'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.typeOf);
        global.isEmpty = mod.exports;
    }
})(this, function (exports, _typeOf) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isEmpty = undefined;


    /**
     * determines if an object or an array is empty
     * if not an object or array then check if its truthy
     * @param {*} val - any value
     * @returns {boolean} - true if empty or not truthy
     */
    var isEmpty = exports.isEmpty = function isEmpty(val) {
        if ((0, _typeOf.typeOf)(val) === 'array') {
            return val.length === 0;
        }
        if ((0, _typeOf.typeOf)(val) === 'object') {
            return Object.keys(val).length < 1;
        }
        return (0, _typeOf.typeOf)(val) !== 'undefined' && !!val;
    };
});