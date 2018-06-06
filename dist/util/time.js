(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'moment'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('moment'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.moment);
        global.time = mod.exports;
    }
})(this, function (exports, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.sortObjArrByDateTime = undefined;

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * sorts the order of an object array by date
     * '2044-02-16T09:30:21-05:00'
     * @param {Array} arr - array of ojects
     * @param {String} prop - the property containing the date on the object
     * @param {Boolean} reverse - option to reverse the order
     * @returns {Array} - sorted array
     */

    var sortObjArrByDateTime = exports.sortObjArrByDateTime = function sortObjArrByDateTime(arr, prop, reverse) {

        return arr.sort(function (a, b) {

            var comparison = 0;

            if ((0, _moment2.default)(a[prop]).isAfter(b[prop])) {
                comparison = reverse ? -1 : 1;
            } else if ((0, _moment2.default)(b[prop]).isAfter(a[prop])) {
                comparison = reverse ? 1 : -1;
            }
            return comparison;
        });
    };
});