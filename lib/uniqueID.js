'use strict';

exports.__esModule = true;
/**
 * generates a ridiculously unique set of characters
 * ...adding a date time at the end makes it almost impossible for collisions
 * def impossible if generated within a closed source (ex: not sharing ids with other users)
 * @returns {String} - super unique value string
 */
var uniqueID = exports.uniqueID = function uniqueID() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};