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
        global.filterArray = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    /**
     * filters an array for text that contains the given value
     * @param {Array} arr - the array to search inside
     * @param {String|Number} val - the value to search for
     * @returns {Array} - the updated array
     */
    var filterArray = exports.filterArray = function filterArray(arr, val) {
        return arr.filter(function (item) {
            if (typeof item === 'string') {
                var value = val + '';
                return item.toLowerCase().search(value.toLowerCase()) !== -1;
            } else {
                var _value = item + '';
                return _value.search(val) !== -1;
            }
        });
    };
});