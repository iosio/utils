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
        global.isInArray = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * checks if a value is in an array (shallow)
     * @param {String|Number|Boolean|NaN} item - pretty much anything except an object or array
     * @param {Array} arr - the array to look inside
     * @returns {boolean} - true if the item is in the array
     */
    var isInArray = exports.isInArray = function isInArray(item, arr) {
        if (arr.length > 0) {
            return arr.indexOf(item) !== -1;
        } else {
            return false;
        }
    };
});