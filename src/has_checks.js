/*
    ---------- HAS CHECKS ------------------
 */
/**
 * checks if a value is in an array (shallow)
 * @param {String|Number|Boolean|NaN} item - pretty much anything except an object or array
 * @param {Array} arr - the array to look inside
 * @returns {boolean} - true if the item is in the array
 */
export const isInArray = (item, arr) => {
    if (arr.length > 0) {
        return arr.indexOf(item) !== -1;
    } else {
        return false;
    }
};



