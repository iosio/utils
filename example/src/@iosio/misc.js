
/*
    ---------- MISC UTIL ------------------
 */


/**
 * makes a new copy of an object, good for verifying the prototype is of type object
 * @param {Object|Array} check_obj - object or array to copy
 * @returns {Object|Array} - copy of object or array
 */
export const deepClone = (check_obj) => {
    return JSON.parse(JSON.stringify(check_obj));
};

