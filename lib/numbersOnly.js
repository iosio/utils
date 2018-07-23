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
    global.numbersOnly = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
   * returns only numbers from a string
   * @param {String} text - to filter
   * @returns {string} text with only numbers in it
   */
  var numbersOnly = exports.numbersOnly = function numbersOnly(text) {
    var val = text + "";
    var invalidChars = /[^0-9]/gi;
    return val.replace(invalidChars, "");
  };
});