import {findByIdInObjArr_give_index} from "./findByIdInObjArr_give_index";
import {removeItemFromArrayByIndex} from './removeItemFromArrayByIndex';

/**
 * finds an object on an array by the given key value (match_prop: id)
 * removes the object from the array and returns a new array
 * @param {Array} arr - the array to search in
 * @param {String} match_prop - the property containing the value (id)
 * @param {String} id - the value on the property to find (match_prop)
 * @returns {Array} - the updated array - or original if not found
 */
export const removeItemFromObjArrById = (arr, match_prop, id) => {
    let index = findByIdInObjArr_give_index(arr, match_prop, id);
    if (index !== false) {
        return removeItemFromArrayByIndex(arr, index);
    } else {
        return arr;
    }
};
