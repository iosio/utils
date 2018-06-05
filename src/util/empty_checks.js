
import {deepClone} from "./misc";
import {isArray} from "./type_checks";
import {isObject} from "./type_checks";
import {isTruthy} from "./type_checks";

/*
    -------- IS EMPTY CHECKS --------------
 */

// import {deepClone, isArray, isObject, isTruthy} from "./index";

/**
 * checks if an object has any properties /is empty
 * @param {Object} obj - object to check for emptiness
 * @returns {boolean} - true if object is empty
 */
export const objectIsEmpty = (obj) => {
    if (!isObject(obj)) {
        console.error('must pass object to objectIsEmpty check');
        return;
    }

    let keys = Object.keys(obj);

    return keys.length < 1
};

/**
 * checks if an array is empty / helper for isEmpty
 * @param {Array} arr to check
 * @returns {boolean} - true if array is empty
 */
export const arrayIsEmpty = (arr) => arr.length === 0;

/**
 * determines if an object or an array is empty
 * if not an object or array then check if its truthy
 * @param {*} val - any value
 * @returns {boolean} - true if empty or not truthy
 */
export const isEmpty = (val) => {
    if (isArray(val)) {
        return arrayIsEmpty(val);
    }
    if (isObject(val)) {
        return objectIsEmpty(val);
    }

    return !isTruthy(val);
};


