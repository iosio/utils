import {typeOf} from "./typeOf";

/**
 * determines if an object or an array is empty
 * if not an object or array then check if its truthy
 * @param {*} val - any value
 * @returns {boolean} - true if empty or not truthy
 */
export const isEmpty = (val) => {
    if (typeOf(val) === 'array') {
        return val.length === 0;
    }
    if (typeOf(val) === 'object') {
        return Object.keys(val).length < 1;
    }
    const isTruthy = (value) => (typeOf(value) !== 'undefined') && !!value;

    return !isTruthy(val)
};