
/*
    --------- COLOR -------- consider using polished.js for SASS functions like this
 */
/**
 * converts a hex string into a rgba value
 * @param {String} hex color value
 * @param {Number} alpha 0.0 to 1
 * @returns {string} - an rgba value
 */
export const hex2rgba = (hex, alpha) => {
    hex = hex.replace('#', '');
    let r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    let g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    let b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
    else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
};

