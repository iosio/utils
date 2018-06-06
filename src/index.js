
// export {
//     /* color */
//     hex2rgba,
//
//     /* comparisons */
//     objEquivalent_deep,
//     closeEnough,
//
//     /* crud operations */
//     removeItemFromArray,
//     removeItemFromArrayByIndex,
//     removeItemFromObjArrById,
//     findByIdInObjArr,
//     findByIdInObjArr_give_index,
//     updateItemInObjArrById,
//     searchInObj,
//     searchInObj_update,
//
//     /* empty checks */
//     objectIsEmpty,
//     arrayIsEmpty,
//     isEmpty,
//
//     /* filters */
//     filterObjArrByProp,
//     filterArray,
//     sortOrderOfObjArr,
//     uniquesInArray,
//     itemsInArray1NotInArray2,
//
//     /* has checks */
//     objectHasProp,
//     isInArray,
//     hasDupsInObjArr_onProp,
//
//     /* misc */
//     deepClone,
//
//     /* number generation */
//     idgen,
//     uniqueID,
//
//     /* string manipulation */
//     tryParse,
//     allCaps,
//     capFirstLet,
//     capEveryFirst,
//     capitalize,
//     textReplacer,
//     hasWord,
//     numbersOnly,
//
//     /* time */
//     sortObjArrByDateTime,
//
//     /* type checks */
//     toString,
//     typeOf,
//     isNaN,
//     isUndefined,
//     isNull,
//     isNumber,
//     isObject,
//     isArray,
//     isString,
//     isFunction,
//     isRegexp,
//     isDate,
//     isTruthy,
//     isBoolean,
//
// } from './util';




export {hex2rgba} from './util/color';
export {
    objEquivalent_deep,
    closeEnough
} from './util/comparisons';

export {
    removeItemFromArray,
    removeItemFromArrayByIndex,
    removeItemFromObjArrById,
    findByIdInObjArr,
    findByIdInObjArr_give_index,
    updateItemInObjArrById,
    searchInObj,
    searchInObj_update,
} from './util/crud_operations';

export {
    objectIsEmpty,
    arrayIsEmpty,
    isEmpty,
} from './util/empty_checks';

export {
    filterObjArrByProp,
    filterArray,
    sortOrderOfObjArr,
    uniquesInArray,
    itemsInArray1NotInArray2,
} from './util/filters';

export {
    objectHasProp,
    isInArray,
    hasDupsInObjArr_onProp,
} from './util/has_checks';

export {
    deepClone,
} from './util/misc';

export {
    idgen,
    uniqueID,
} from './util/number_generation';

export {
    tryParse,
    allCaps,
    capFirstLet,
    capEveryFirst,
    capitalize,
    textReplacer,
    hasWord,
    numbersOnly,
} from './util/string_manipulation';


export {
    sortObjArrByDateTime,
} from './util/time';

export {
    toString,
    typeOf,
    isNaN,
    isUndefined,
    isNull,
    isNumber,
    isObject,
    isArray,
    isString,
    isFunction,
    isRegexp,
    isDate,
    isTruthy,
    isBoolean,
} from './util/type_checks';

export {
    isShape,
} from './util/isShape';



export {
    // domReady,
    loadLink,
    loadScript,
} from './dom/loaders'

export {
    noScroll,
} from './dom/noScroll';