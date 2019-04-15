/**
 * removes an item from an array by its index
 * @param {Array} arr - array to filter
 * @param {Number} index - index to remove
 * @returns {Array} - the updated array
 */
export const removeItemFromArrayByIndex = (arr, index) => {
    arr.splice(index, 1);
    return arr;
};
