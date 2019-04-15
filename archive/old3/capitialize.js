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
export const capitalize = (string, option) =>
    option === 'everyFirst'
        ? capEveryFirst(string)
        : (option === 'first'
        ? capFirstLet(string)
        : allCaps(string));

