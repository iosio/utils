
import {isString} from "./type_checks";
import {isInArray} from "./has_checks";
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
            return item[prop].search(val) !== -1;
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
            return item.search(val) !== -1;
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




/**
 * filters out duplicates in array of strings
 * @param {Array} arr - array to filter
 * @returns {Array} - filtered array
 */
export const uniquesInArray = (arr) => arr.filter((item, i, ar) => ar.indexOf(item) === i);



/**
 * returns the items in arr1 that don't exist in arr2
 * @param {Array} arr1 - check these
 * @param {Array} arr2 - for the existence here
 * @returns {Array} - array of items that are in arr1 that don't exist in arr2
 */
export const itemsInArray1NotInArray2 = (arr1, arr2) => {
    let notInArry2 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!isInArray(arr1[i], arr2)) {
            notInArry2.push(arr1[i]);
        }
    }
    if (notInArry2.length > 0) {
        return notInArry2;
    } else {
        return false;
    }
};


