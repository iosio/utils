
export {
    /* color */
    hex2rgba,

    /* comparisons */
    objEquivalent_deep,
    closeEnough,

    /* crud operations */
    removeItemFromArray,
    removeItemFromArrayByIndex,
    removeItemFromObjArrById,
    findByIdInObjArr,
    findByIdInObjArr_give_index,
    updateItemInObjArrById,
    searchInObj,
    searchInObj_update,

    /* empty checks */
    objectIsEmpty,
    arrayIsEmpty,
    isEmpty,

    /* filters */
    filterObjArrByProp,
    filterArray,
    sortOrderOfObjArr,
    uniquesInArray,
    itemsInArray1NotInArray2,

    /* has checks */
    objectHasProp,
    isInArray,
    hasDupsInObjArr_onProp,

    /* misc */
    deepClone,

    /* number generation */
    idgen,
    uniqueID,

    /* string manipulation */
    tryParse,
    allCaps,
    capFirstLet,
    capEveryFirst,
    capitalize,
    textReplacer,
    hasWord,
    numbersOnly,

    /* time */
    sortObjArrByDateTime,

    /* type checks */
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
    isTruthy

} from './util';


export {
    /*loaders */
    domReady,
    loadLink,
    loadScript,

    /* other dom */
    noScroll,

} from './dom';