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
    global.removeItemFromArrayByIndex = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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
});