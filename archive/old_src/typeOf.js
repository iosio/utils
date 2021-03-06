/**
 * tells what type it is. only checks shallow. wont work with NaN
 * @param {*} thing - thing to check
 * @returns {string} - string definition of the primitive
 */
const typeOf_shallow = (thing) => Object.prototype.toString.call(thing).split(' ')[1].slice(0, -1).toLowerCase();

/**
 * determines if a primitive is isNaN
 * A polyfill for isNaN
 * (leverages the unique never-equal-to-itself characteristic of NaN)
 * @param {*} val - any value
 * @returns {Boolean} - returns true if val is not a number
 */
export const isNaN = function (val) {
    let n = Number(val);
    return n !== n;	//eslint-disable-line
};

/**
 * tells what type it is.
 * NaN is a number but also not a number so check for type number and NaN to return type nan
 * @param {*} thing - thing to check
 * @returns {string} - string definition of the primitive
 */
export const typeOf = (thing) => isNaN(thing) && typeOf_shallow(thing) === 'number' ? 'nan' : typeOf_shallow(thing);