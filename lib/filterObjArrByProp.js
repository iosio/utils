(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.filterObjArrByProp = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    /**
     * filters an object array on a property that contains the given value
     * useful for filter search on lists
     * @param {Array} arr - the array to filter
     * @param {String} prop - the property on the object to look for the given value on
     * @param {String|Number} val - the search criteria
     * @returns {Array} - the updated array
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
});