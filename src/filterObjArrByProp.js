
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
        if (typeof item[prop] === 'string') {
            let value = val + '';
            return item[prop].toLowerCase().search(value.toLowerCase()) !== -1;
        } else {
            let value = item[prop] + '';
            return value.search(val) !== -1;
        }

    });
};
