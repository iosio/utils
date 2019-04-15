'use strict';

exports.__esModule = true;

/**
 * Simple text search on object array
 * filters an object array on a property that contains the given value
 * useful for filter search on lists
 * @param {Array} arr - the array to filter
 * @param {String} prop - the property on the object to look for the given value on
 * @param {String|Number} val - the search criteria
 * @returns {Array} - array containing objects that have the matching key values
 */
var filterObjArrByProp = exports.filterObjArrByProp = function filterObjArrByProp(arr, prop, val) {
    return arr.filter(function (item) {
        if (typeof item[prop] === 'string') {
            var value = val + '';
            return item[prop].toLowerCase().search(value.toLowerCase()) !== -1;
        } else {
            var _value = item[prop] + '';
            return _value.search(val) !== -1;
        }
    });
};