
/**
 * filters an array for text that contains the given value
 * @param {Array} arr - the array to search inside
 * @param {String|Number} val - the value to search for
 * @returns {Array} - the updated array
 */
export const filterArray = (arr, val) => {
    return arr.filter(item => {
        if (typeof item === 'string') {
            let value = val + '';
            return item.toLowerCase().search(value.toLowerCase()) !== -1;
        } else {
            let value = item + '';
            return value.search(val) !== -1;
        }

    });
};