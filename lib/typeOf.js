'use strict';

exports.__esModule = true;
/**
 * tells what type it is. only checks shallow. wont work with NaN
 * @param {*} thing - thing to check
 * @returns {string} - string definition of the primitive
 */
var typeOf_shallow = exports.typeOf_shallow = function typeOf_shallow(thing) {
  return Object.prototype.toString.call(thing).split(' ')[1].slice(0, -1).toLowerCase();
};

/**
 * determines if a primitive is isNaN
 * A polyfill for isNaN
 * (leverages the unique never-equal-to-itself characteristic of NaN)
 * @param {*} val - any value
 * @returns {Boolean} - returns true if val is not a number
 */
var isNaN = function isNaN(val) {
  var n = Number(val);
  return n !== n; //eslint-disable-line
};

/**
 * tells what type it is.
 * NaN is a number but also not a number so check for type number and NaN to return type nan
 * @param {*} thing - thing to check
 * @returns {string} - string definition of the primitive
 */
var typeOf = exports.typeOf = function typeOf(thing) {
  return isNaN(thing) && typeOf_shallow(thing) === 'number' ? 'nan' : typeOf_shallow(thing);
};