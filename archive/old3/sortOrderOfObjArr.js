import {typeOf} from "./typeOf";

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
        if (typeOf(a[objProp])=== 'string') {
            nameA = a[objProp].toLowerCase();
        } else {
            nameA = a[objProp];
        }

        if (typeOf(a[objProp])=== 'string') {
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