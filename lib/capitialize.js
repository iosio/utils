'use strict';

exports.__esModule = true;
/**
 * capitalizes a string
 * @param {String} string - string to upperCase
 * @returns {String} - all caps string
 */
var allCaps = exports.allCaps = function allCaps(string) {
  return string.toUpperCase();
};

/**
 * capitalises the first letter of the first word in a string
 * @param {String} string - to capitalize
 * @returns {string} - string with first char capitalized
 */
var capFirstLet = exports.capFirstLet = function capFirstLet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * capitalizes the first letter of every word in a string
 * @param {String} string - to capitalize
 * @returns {String} - string with every first letter capitalized
 */
var capEveryFirst = exports.capEveryFirst = function capEveryFirst(string) {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 * capitalize a string with different options.
 *
 * @param {String} string - to capitalize
 * @param {String} option - 'everyFirst', 'first', or undefined for all caps
 * @returns {String} - capitalized string
 */
var capitalize = exports.capitalize = function capitalize(string, option) {
  return option === 'everyFirst' ? capEveryFirst(string) : option === 'first' ? capFirstLet(string) : allCaps(string);
};