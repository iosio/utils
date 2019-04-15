"use strict";

exports.__esModule = true;
/**
 * checks if a number is between given range or threshold
 * @param {Number} check_num - number to check
 * @param {Number} close_to - number to check against
 * @param {Number} thresh - wiggle room for variance / range + or - / threshold
 * @returns {Boolean} - true if number is within range
 */
var closeEnough = exports.closeEnough = function closeEnough(check_num, close_to, thresh) {
    var is_less_than = false;
    var is_greater_than = false;

    if (check_num >= close_to - thresh) {
        is_greater_than = true;
    }

    if (check_num <= close_to + thresh) {
        is_less_than = true;
    }

    return is_greater_than && is_less_than;
};