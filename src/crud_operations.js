
/*
    ---------- CRUD OPERATIONS ------------------
 */

/**
 * removes an item from an array
 * @param {String|Number|Boolean|NaN} item - to remove
 * @param {Array} arr - array to filter
 * @returns {Array} - the updated array
 */
export const removeItemFromArray = (item, arr) => arr.splice(arr.indexOf(item), 1);

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
    }else{
        return arr;
    }
};


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

/**
 * gives the index of the object looking for, given the key value
 * @param {Array} arr - array to search in
 * @param {String} match_prop -  the property on the object to look on
 * @param {String|Number} id - the value on the match_prop to search for
 * @returns {Number|Boolean} - or false if no match is found
 */
export const findByIdInObjArr_give_index = (arr, match_prop, id) => {
    let item = false;
    //Object.keys iterates through an object returning keys an values: //{key: value} *or {key: o[key]}
    if (arr && match_prop && (id || id === 0)) {

        arr.forEach((obj, indi) => {
            Object.keys(obj).forEach((key) => {

                if (key === match_prop) {
                    if (obj[key] === id) {
                        item = indi;
                    }

                }
            });
        });
    }

    return item;
};

/**
 * finds an object in an array by an id , updates it to a new value and returns the updated array
 * @param {Array} arr - array to search in
 * @param {String} match_prop - the property on the object to look on
 * @param {String|Number} id -  the value on the match_prop to search for
 * @param {*} update_to - the value to update to
 * @returns {Array} - the updated array
 */
export const updateItemInObjArrById = (arr, match_prop, id, update_to) => {
    let item_index = findByIdInObjArr_give_index(arr, match_prop, id);
    arr[item_index] = update_to;
    return arr;
};


// let derp = [{p:'a'}, {p:[{x:[{y:'poo'}]}]}, {p:'z'}, {p:'y'}, {p:'b'}, {p:'c'},{p: 'd'}];

/**
 * search for an object in a nested object or object array for an object that has a specific key value
 * and return that object. optionally pass an update function - will modify original object / array
 * @param {Object|Array} theObject - object or nested object or object array ...etc
 * @param {String} match_prop - the property on the object to look on
 * @param {String|Number|Boolean|NaN} seeking - the value to look for
 * @param {function|Boolean} update - an optional function to pass to update the object
 * @param {String|Number|Boolean|NaN} ignore - values to ignore
 * @returns {Object} - the single updated object - use searchInObject_update to get the entire object/array back
 */
export const searchInObj = (theObject, match_prop, seeking, update, ignore) => {
    let result = null;
    if (theObject instanceof Array) {
        for (let i = 0; i < theObject.length; i++) {
            result = searchInObj(theObject[i], match_prop, seeking, update, ignore);
            if (result) {
                break;
            }
        }
    }
    else {
        for (let prop in theObject) {
            // console.log(prop + ': ' + theObject[prop]);
            if (prop !== ignore) {
                if (prop === match_prop) {
                    if (theObject[prop] === seeking) {
                        console.log("*************** found it");
                        if (update) {
                            console.log('theres an update');
                            update(theObject);

                        }
                        return theObject;
                    }
                }
                if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                    result = searchInObj(theObject[prop], match_prop, seeking, update, ignore);
                    if (result) {
                        break;
                    }
                }
            }

        }
    }
    return result;
};
/**
 * search for an object in a nested object or object array for an object that has a specific key value
 * and return that object. optionally pass an update function - will modify original object / array
 * @param {Object|Array} theObject - object or nested object or object array ...etc
 * @param {String} match_prop - the property on the object to look on
 * @param {String|Number|Boolean|NaN} seeking - the value to look for
 * @param {function|Boolean} update - an optional function to pass to update the object
 * @param {String|Number|Boolean|NaN} ignore - values to ignore
 * @returns {Object} - the single updated object - use searchInObject_update to get the entire object/array back
 */
export const searchInObj_update = (theObject, match_prop, seeking, update, ignore) => {

    searchInObj(theObject, match_prop, seeking, update, ignore);
    return theObject;
};



