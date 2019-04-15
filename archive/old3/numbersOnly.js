

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
