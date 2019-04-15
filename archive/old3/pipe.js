/**
 * simple wrapper for reduce
 * @param {Array} funcArray - array of functions that return the result to the next function argument
 * @param {*} initialValue - first value to be passed to the argument of the first function call
 * @returns {*} - the result
 */
export const pipe = (funcArray, initialValue)=>
    funcArray.reduce((acc,func)=>func(acc), initialValue);