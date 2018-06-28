import {isString} from "./type_checks";
/*
    --------- STRING MANIPULATION --------------
*/

/**
 * attempts to parse stringified data safely and returns an object with the data
 * @param {String} data - stringified json
 * @returns {{ok: boolean, data: any, error: boolean}|{ok: boolean, data: null, error: *}} - returns stuff
 */
export const tryParse = (data) => {

    let parsed_data;

    try {
        parsed_data = { ok: true, data: JSON.parse(data), error: false, };
    } catch (e) {

        parsed_data = { ok: false, data: null, error: e.message, };
    }

    return parsed_data;
};

/**
 * capitalizes a string
 * @param {String} string - string to upperCase
 * @returns {String} - all caps string
 */
export const allCaps = (string) => string.toUpperCase();

/**
 * capitalises the first letter of the first word in a string
 * @param {String} string - to capitalize
 * @returns {string} - string with first char capitalized
 */
export const capFirstLet = (string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * capitalizes the first letter of every word in a string
 * @param {String} string - to capitalize
 * @returns {String} - string with every first letter capitalized
 */
export const capEveryFirst = (string) => string.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

/**
 * capitalize a string with different options.
 *
 * @param {String} string - to capitalize
 * @param {String} option - 'everyFirst', 'first', or undefined for all caps
 * @returns {String} - capitalized string
 */
export const capitalize = (string, option) => {
    if (option === 'everyFirst') {
        return capEveryFirst(string);
    } else if (option === 'first') {
        return capFirstLet(string);
    } else {
        return allCaps(string);
    }
};

/**
 * helper function to replace characters in a string with another value
 * @param {String} string - to replaces chars in
 * @param {Array} arr - an array of objects containing the key values to find and replace : string - to find, with - to replace with
 * @returns {String} - updated string
 */
export const textReplacer = (string, arr = [{ string: '', with: '', }]) => {
    let _text = string;
    arr.forEach((obj) => {
        _text = _text.split(obj.string).join(obj.with);
    });
    return _text;
};

/**
 * helper function to determine if a string has a word in it
 * @param {String} string - string to search in
 * @param {String} word - word to look for
 * @returns {boolean} - true if string has word
 */
export const hasWord = (string, word) => {
    if (!isString(string) || !isString(word)) {
        return false;
    }
    let reg = new RegExp(word, 'gi');
    return !!string.match(reg);
};


/**
 * returns only numbers from a string
 * @param {String} text - to filter
 * @returns {string} text with only numbers in it
 */
export const numbersOnly = (text) => {
    let val = text + "";
    const invalidChars = /[^0-9]/gi;
    return val.replace(invalidChars, "");
};

