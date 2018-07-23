

/*
    ------------ NUMBER GENERATION --------------
 */

let _i_d_counter_ = 0;
/**
 * simple id generator, just gives an incremented number with each call
 * @returns {Number} - an incremented number
 */
export const idgen = () => {
    let oldId = _i_d_counter_;
    _i_d_counter_ += 1;
    return oldId;
};
/**
 * generates a ridiculously unique set of characters
 * ...adding a date time at the end makes it almost impossible for collisions
 * def impossible if generated within a closed source (ex: not sharing ids with other users)
 * @returns {String} - super unique value string
 */
export const uniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};