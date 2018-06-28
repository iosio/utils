(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.time = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * sorts the order of an object array by date
     * '2044-02-16T09:30:21-05:00'
     * @param {Object|Function} moment - moment.js library
     * @param {Array} arr - array of ojects
     * @param {String} prop - the property containing the date on the object
     * @param {Boolean} reverse - option to reverse the order
     * @returns {Array} - sorted array
     */

    var sortObjArrByDateTime = exports.sortObjArrByDateTime = function sortObjArrByDateTime(moment, arr, prop, reverse) {

        return arr.sort(function (a, b) {

            var comparison = 0;

            if (moment(a[prop]).isAfter(b[prop])) {
                comparison = reverse ? -1 : 1;
            } else if (moment(b[prop]).isAfter(a[prop])) {
                comparison = reverse ? 1 : -1;
            }
            return comparison;
        });
    };
});