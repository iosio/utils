(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './type_checks'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./type_checks'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.type_checks);
        global.filters = mod.exports;
    }
})(this, function (exports, _type_checks) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.sortOrderOfObjArr = exports.filterArray = exports.filterObjArrByProp = undefined;

    /*
        ---------- FILTERS ------------------
     */

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
            if ((0, _type_checks.isString)(item[prop])) {
                return item[prop].toLowerCase().search(val.toLowerCase()) !== -1;
            } else {
                var value = item[prop] + '';
                return value.search(val) !== -1;
            }
        });
    };

    /**
     * filters an array for text that contains the given value
     * @param {Array} arr - the array to search inside
     * @param {String|Number} val - the value to search for
     * @returns {Array} - the updated array
     */
    var filterArray = exports.filterArray = function filterArray(arr, val) {
        return arr.filter(function (item) {
            if ((0, _type_checks.isString)(item)) {
                return item.toLowerCase().search(val.toLowerCase()) !== -1;
            } else {
                var value = item + '';
                return value.search(val) !== -1;
            }
        });
    };
    /**
     * sorts the order of an object array
     * @param {Array} arr - array to sort
     * @param {String} objProp - the property to sort on (ex: name)
     * @param {Boolean} descend - true to reverse the order
     * @returns {Array} - the sorted array
     */
    var sortOrderOfObjArr = exports.sortOrderOfObjArr = function sortOrderOfObjArr(arr, objProp, descend) {
        var nameA = void 0,
            nameB = void 0;

        return arr.sort(function (a, b) {
            if ((0, _type_checks.isString)(a[objProp])) {
                nameA = a[objProp].toLowerCase();
            } else {
                nameA = a[objProp];
            }

            if ((0, _type_checks.isString)(a[objProp])) {
                nameB = b[objProp].toLowerCase();
            } else {
                nameB = b[objProp];
            }

            if (nameA < nameB) {
                return descend ? 1 : -1;
            }
            if (nameA > nameB) {
                return descend ? -1 : 1;
            }
            return 0;
        });
    };
});