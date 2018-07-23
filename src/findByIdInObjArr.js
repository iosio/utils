

/**
 * grabs an object from an array by a key value match, will return false if no match is found
 * @param {Array} arr - array to search in
 * @param {String} match_prop - the property on the object to look on
 * @param {String|Number} id - the value on the match_prop to search for
 * @returns {Array|Boolean} - array or boolean
 */
export const findByIdInObjArr = (arr, match_prop, id) => {
    let item = false;
    //Object.keys iterates through an object returning keys an values: //{key: value} *or {key: o[key]}
    if (arr && match_prop && (id || id === 0)) {
        arr.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
                if (key === match_prop) {
                    if (obj[key] === id) {
                        item = obj;
                    }

                }
            });
        });
    }
    return item;
};