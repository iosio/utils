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
        global.sortOrderOfObjArr = mod.exports;
    }
})(this, function (exports, _typeOf) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.sortOrderOfObjArr = undefined;


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
            if ((0, _typeOf.typeOf)(a[objProp]) === 'string') {
                nameA = a[objProp].toLowerCase();
            } else {
                nameA = a[objProp];
            }

            if ((0, _typeOf.typeOf)(a[objProp]) === 'string') {
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