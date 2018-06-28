
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


/**
 * returns bool if an object array has an object with a duplicate property (that exists on another object)
 * @param {Array} arr - the array to look in
 * @param {String} prop - the name of the property to check for
 * @returns {boolean} - true if another object has the property
 */
export const hasDupsInObjArr_onProp = (arr, prop) => {
    if (arr) {
        let temp = [];
        arr.forEach((obj) => {
            if (!isInArray(obj[prop], temp)) {
                temp.push(obj[prop]);
            } else {
                return true;
            }
        });
        return false;
    }
};


