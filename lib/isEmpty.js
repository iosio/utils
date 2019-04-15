'use strict';

exports.__esModule = true;
exports.isEmpty = undefined;

var _typeOf = require('./typeOf');

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
    var isTruthy = function isTruthy(value) {
        return (0, _typeOf.typeOf)(value) !== 'undefined' && !!value;
    };

    return !isTruthy(val);
};