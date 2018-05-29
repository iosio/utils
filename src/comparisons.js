/*
    ---------- COMPARISONS ----------------

*/

/**
 * stringifies both objects and compares if the two string values are the same
 * @param {Object|Array} a - object
 * @param {Object|Array} b - object
 * @returns {Boolean} - true if the objects are the same
 */
export const objEquivalent_deep = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

/**
 * checks if a number is between given range or threshold
 * @param {Number} check_num - number to check
 * @param {Number} close_to - number to check against
 * @param {Number} thresh - wiggle room for variance / range + or - / threshold
 * @returns {Boolean} - true if number is within range
 */
export const closeEnough = (check_num, close_to, thresh) => {
    let is_less_than = false;
    let is_greater_than = false;

    if (check_num > (close_to - thresh)) {
        is_greater_than = true;
    }

    if (check_num < (close_to + thresh)) {
        is_less_than = true;
    }

    return is_greater_than && is_less_than;

};
