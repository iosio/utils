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