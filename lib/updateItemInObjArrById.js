"use strict";

exports.__esModule = true;
exports.updateItemInObjArrById = undefined;

var _findByIdInObjArr_give_index = require("./findByIdInObjArr_give_index");

/**
 * finds an object in an array by an id , updates it to a new value and returns the updated array
 * @param {Array} arr - array to search in
 * @param {String} match_prop - the property on the object to look on
 * @param {String|Number} id -  the value on the match_prop to search for
 * @param {*} update_to - the value to update to
 * @returns {Array} - the updated array
 */
var updateItemInObjArrById = exports.updateItemInObjArrById = function updateItemInObjArrById(arr, match_prop, id, update_to) {
  var item_index = (0, _findByIdInObjArr_give_index.findByIdInObjArr_give_index)(arr, match_prop, id);
  arr[item_index] = update_to;
  return arr;
};