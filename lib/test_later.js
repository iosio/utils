//
// // let derp = [{p:'a'}, {p:[{x:[{y:'poo'}]}]}, {p:'z'}, {p:'y'}, {p:'b'}, {p:'c'},{p: 'd'}];
//
// /**
//  * search for an object in a nested object or object array for an object that has a specific key value
//  * and return that object. optionally pass an update function - will modify original object / array
//  * @param {Object|Array} theObject - object or nested object or object array ...etc
//  * @param {String} match_prop - the property on the object to look on
//  * @param {String|Number|Boolean|NaN} seeking - the value to look for
//  * @param {function|Boolean} update - an optional function to pass to update the object
//  * @param {String|Number|Boolean|NaN} ignore - values to ignore
//  * @returns {Object} - the single updated object - use searchInObject_update to get the entire object/array back
//  */
// export const searchInObj = (theObject, match_prop, seeking, update, ignore) => {
//     let result = null;
//     if (theObject instanceof Array) {
//         for (let i = 0; i < theObject.length; i++) {
//             result = searchInObj(theObject[i], match_prop, seeking, update, ignore);
//             if (result) {
//                 break;
//             }
//         }
//     }
//     else {
//         for (let prop in theObject) {
//             // console.log(prop + ': ' + theObject[prop]);
//             if (prop !== ignore) {
//                 if (prop === match_prop) {
//                     if (theObject[prop] === seeking) {
//                         console.log("*************** found it");
//                         if (update) {
//                             console.log('theres an update');
//                             update(theObject);
//
//                         }
//                         return theObject;
//                     }
//                 }
//                 if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
//                     result = searchInObj(theObject[prop], match_prop, seeking, update, ignore);
//                     if (result) {
//                         break;
//                     }
//                 }
//             }
//
//         }
//     }
//     return result;
// };
// /**
//  * search for an object in a nested object or object array for an object that has a specific key value
//  * and return that object. optionally pass an update function - will modify original object / array
//  * @param {Object|Array} theObject - object or nested object or object array ...etc
//  * @param {String} match_prop - the property on the object to look on
//  * @param {String|Number|Boolean|NaN} seeking - the value to look for
//  * @param {function|Boolean} update - an optional function to pass to update the object
//  * @param {String|Number|Boolean|NaN} ignore - values to ignore
//  * @returns {Object} - the single updated object - use searchInObject_update to get the entire object/array back
//  */
// export const searchInObj_update = (theObject, match_prop, seeking, update, ignore) => {
//
//     searchInObj(theObject, match_prop, seeking, update, ignore);
//     return theObject;
// };

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.test_later = mod.exports;
  }
})(this, function () {
  "use strict";
});