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
    global.removeItemFromArray = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   * removes an item from an array
   * @param {String|Number|Boolean|NaN} item - to remove
   * @param {Array} arr - array to filter
   * @returns {Array} - the updated array
   */
  var removeItemFromArray = exports.removeItemFromArray = function removeItemFromArray(item, arr) {
    arr.splice(arr.indexOf(item), 1);
    return arr;
  };
});