(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.crud_operations = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /*
        ---------- CRUD OPERATIONS ------------------
     */

    /**
     * removes an item from an array
     * @param {String|Number|Boolean|NaN} item - to remove
     * @param {Array} arr - array to filter
     * @returns {Array} - the updated array
     */
    var removeItemFromArray = exports.removeItemFromArray = function removeItemFromArray(item, arr) {
        arr.splice(arr.indexOf(item), 1);
        return arr;
    };

    /**
     * removes an item from an array by its index
     * @param {Array} arr - array to filter
     * @param {Number} index - index to remove
     * @returns {Array} - the updated array
     */
    var removeItemFromArrayByIndex = exports.removeItemFromArrayByIndex = function removeItemFromArrayByIndex(arr, index) {
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
    var removeItemFromObjArrById = exports.removeItemFromObjArrById = function removeItemFromObjArrById(arr, match_prop, id) {
        var index = findByIdInObjArr_give_index(arr, match_prop, id);
        if (index !== false) {
            return removeItemFromArrayByIndex(arr, index);
        } else {
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
    var findByIdInObjArr = exports.findByIdInObjArr = function findByIdInObjArr(arr, match_prop, id) {
        var item = false;
        //Object.keys iterates through an object returning keys an values: //{key: value} *or {key: o[key]}
        if (arr && match_prop && (id || id === 0)) {
            arr.forEach(function (obj) {
                Object.keys(obj).forEach(function (key) {
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
    var findByIdInObjArr_give_index = exports.findByIdInObjArr_give_index = function findByIdInObjArr_give_index(arr, match_prop, id) {
        var item = false;
        //Object.keys iterates through an object returning keys an values: //{key: value} *or {key: o[key]}
        if (arr && match_prop && (id || id === 0)) {

            arr.forEach(function (obj, indi) {
                Object.keys(obj).forEach(function (key) {

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
    var updateItemInObjArrById = exports.updateItemInObjArrById = function updateItemInObjArrById(arr, match_prop, id, update_to) {
        var item_index = findByIdInObjArr_give_index(arr, match_prop, id);
        arr[item_index] = update_to;
        return arr;
    };
});