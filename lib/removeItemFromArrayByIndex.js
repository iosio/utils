"use strict";

exports.__esModule = true;
/**
 * removes an item from an array by its index
 * @param {Array} arr - array to filter
 * @param {Number} index - index to remove
 * @returns {Array} - the updated array
 */
var removeItemFromArrayByIndex = exports.removeItemFromArrayByIndex = function removeItemFromArrayByIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
};