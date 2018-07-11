/*
    --------- TYPE CHECKS AND STUFF ---------
 */

/**
 * tells what type it is. only checks shallow. wont work with NaN
 * @param {*} thing - thing to check
 * @returns {string} - string definition of the primitive
 */
export const typeOf_shallow = (thing) => {
    const stringified = Object.prototype.toString.call(thing);
    const type = stringified.split(' ')[1].slice(0, -1);
    return type.toLowerCase();
};

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
export const typeOf = (thing) => {
    if(isNaN(thing) && typeOf_shallow(thing) === 'number'){
        return 'nan';
    }else{
        return typeOf_shallow(thing);
    }
};

/**
 * determines if a value is undefined
 * @param {*} val - any value
 * @returns {boolean} - returns true if value is undefined
 */
export const isUndefined = (val) => typeOf(val) === "undefined";

/**
 * determines if a value is null
 * @param {*} val - ay value
 * @returns {boolean} true if val is null
 */
export const isNull = (val) => typeOf(val) === "null";

/**
 * determines if a value is a number
 * @param {*} val - any value
 * @returns {boolean} true if val is number
 */
export const isNumber = (val) => typeOf(val) === 'number' && !isNaN(val);

/**
 * determines if a value is an object
 * @param {*} val - any value
 * @returns {boolean} - true if val is an object
 */
export const isObject = (val) => typeOf(val) === "object";

/**
 * determines if a value is an array (useful because arrays will return object when using typeof)
 * @param {*} val - any value
 * @returns {boolean} - true if val is an array
 */
export const isArray = (val) => typeOf(val) === 'array';

/**
 * determines if a value is a string
 * @param {*} val - any value
 * @returns {boolean} - true if val is a string
 */
export const isString = (val) => typeOf(val) === 'string';

/**
 * determines if a value is a function
 * @param {*} val - any val
 * @returns {boolean} - true if val is function
 */
export const isFunction = (val) => typeOf(val) === 'function';

/**
 * determines if a value is a regular expression
 * @param {*} val - any val
 * @returns {boolean} - true if val is regexp
 */
export const isRegexp = (val) => typeOf(val) === 'regexp';

/**
 * determines if a value is a date object
 * @param {*} val - any val
 * @returns {boolean} - true if val is a date object
 */
export const isDate = (val) => typeOf(val) === 'date';


/**
 * determines if a value is a boolean
 * @param {*} val - any val
 * @returns {boolean} - true if val is a boolean
 */
export const isBoolean = (val) => typeOf(val) === 'boolean';

/**
 * determines if a value is truthy
 * @param {*} val - any val
 * @returns {boolean} - true if val is truthy
 */
export const isTruthy = (val) => !isUndefined(val) && !!val;


// export const isForSureNaN = (val) => {
//     const defNotANumberChecks = [
//         isUndefined,
//         isNull,
//         isObject,
//         isArray,
//         isString,
//         isFunction,
//         isRegexp,
//         isDate,
//         isBoolean,
//         isNumber,
//     ];
//
//     // let def_not = false;
//     for (let i = 0; i < defNotANumberChecks.length; i++) {
//         if (defNotANumberChecks[i](val)) {
//            return  true
//         }
//     }
//
//     return isNaN(val);
//
//
// };






































