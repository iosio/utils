
/**
 * removes an item from an array
 * @param {String|Number|Boolean|NaN} item - to remove
 * @param {Array} arr - array to filter
 * @returns {Array} - the updated array
 */
export const removeItemFromArray = (item, arr) => {
    arr.splice(arr.indexOf(item), 1);
    return arr;
};
