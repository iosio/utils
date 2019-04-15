/**
 * repeats a function a given number of times
 * @example
 * repeat(3)(()=>console.log('yo'));
 * //logs
 * //yo
 * //yo
 * //yo
 * @param {number} times - the amount of times to run the function
 * @returns {function} - function to pass the callback to
 */
export const repeat = times => func => [...Array(times)].map(()=>func());