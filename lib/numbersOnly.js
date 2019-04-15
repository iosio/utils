"use strict";

exports.__esModule = true;


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