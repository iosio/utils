"use strict";

exports.__esModule = true;

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