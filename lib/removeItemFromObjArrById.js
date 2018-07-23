(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "./findByIdInObjArr_give_index", "./removeItemFromArrayByIndex"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./findByIdInObjArr_give_index"), require("./removeItemFromArrayByIndex"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.findByIdInObjArr_give_index, global.removeItemFromArrayByIndex);
        global.removeItemFromObjArrById = mod.exports;
    }
})(this, function (exports, _findByIdInObjArr_give_index, _removeItemFromArrayByIndex) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.removeItemFromObjArrById = undefined;


    /**
     * finds an object on an array by the given key value (match_prop: id)
     * removes the object from the array and returns a new array
     * @param {Array} arr - the array to search in
     * @param {String} match_prop - the property containing the value (id)
     * @param {String} id - the value on the property to find (match_prop)
     * @returns {Array} - the updated array - or original if not found
     */
    var removeItemFromObjArrById = exports.removeItemFromObjArrById = function removeItemFromObjArrById(arr, match_prop, id) {
        var index = (0, _findByIdInObjArr_give_index.findByIdInObjArr_give_index)(arr, match_prop, id);
        if (index !== false) {
            return (0, _removeItemFromArrayByIndex.removeItemFromArrayByIndex)(arr, index);
        } else {
            return arr;
        }
    };
});