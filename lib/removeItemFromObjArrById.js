"use strict";

exports.__esModule = true;
exports.removeItemFromObjArrById = undefined;

var _findByIdInObjArr_give_index = require("./findByIdInObjArr_give_index");

var _removeItemFromArrayByIndex = require("./removeItemFromArrayByIndex");

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