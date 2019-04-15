/**
 * primarily used for joining classNames together into one string
 * @param args - array of strings
 * @returns {string} - the joined classNames
 */
export const classNames = (...args) => [...args].join(' ');
export default classNames;