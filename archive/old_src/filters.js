
import {isString} from "./type_checks";
/*
    ---------- FILTERS ------------------
 */


/**
 * filters an object array on a property that contains the given value
 * useful for filter search on lists
 * @param {Array} arr - the array to filter
 * @param {String} prop - the property on the object to look for the given value on
 * @param {String|Number} val - the search criteria
 * @returns {Array} - the updated array
 */
export const filterObjArrByProp = (arr, prop, val) => {
    return arr.filter((item) => {
        if (isString(item[prop])) {
            return item[prop].toLowerCase().search(val.toLowerCase()) !== -1;
        } else {
            let value = item[prop] + '';
            return value.search(val) !== -1;
        }

    });
};

/**
 * filters an array for text that contains the given value
 * @param {Array} arr - the array to search inside
 * @param {String|Number} val - the value to search for
 * @returns {Array} - the updated array
 */
export const filterArray = (arr, val) => {
    return arr.filter(item => {
        if (isString(item)) {
            return item.toLowerCase().search(val.toLowerCase()) !== -1;
        } else {
            let value = item + '';
            return value.search(val) !== -1;
        }

    });
};
/**
 * sorts the order of an object array
 * @param {Array} arr - array to sort
 * @param {String} objProp - the property to sort on (ex: name)
 * @param {Boolean} descend - true to reverse the order
 * @returns {Array} - the sorted array
 */
export const sortOrderOfObjArr = (arr, objProp, descend) => {
    let nameA, nameB;

    return arr.sort((a, b) => {
        if (isString(a[objProp])) {
            nameA = a[objProp].toLowerCase();
        } else {
            nameA = a[objProp];
        }

        if (isString(a[objProp])) {
            nameB = b[objProp].toLowerCase();
        } else {
            nameB = b[objProp];
        }

        if (nameA < nameB) {
            return descend ? 1 : -1;
        }
        if (nameA > nameB) {
            return descend ? -1 : 1;
        }
        return 0;
    });
};






