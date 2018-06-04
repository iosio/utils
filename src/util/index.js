
export {hex2rgba} from './color';
export {
    objEquivalent_deep,
    closeEnough
} from './comparisons';

export {
    removeItemFromArray,
    removeItemFromArrayByIndex,
    removeItemFromObjArrById,
    findByIdInObjArr,
    findByIdInObjArr_give_index,
    updateItemInObjArrById,
    searchInObj,
    searchInObj_update,
} from './crud_operations';

export {
    objectIsEmpty,
    arrayIsEmpty,
    isEmpty,
} from './empty_checks';

export {
    filterObjArrByProp,
    filterArray,
    sortOrderOfObjArr,
    uniquesInArray,
    itemsInArray1NotInArray2,
} from './filters';

export {
    objectHasProp,
    isInArray,
    hasDupsInObjArr_onProp,
} from './has_checks';

export {
    deepClone,
} from './misc';

export {
    idgen,
    uniqueID,
} from './number_generation';

export {
    tryParse,
    allCaps,
    capFirstLet,
    capEveryFirst,
    capitalize,
    textReplacer,
    hasWord,
    numbersOnly,
} from './string_manipulation';


export {
    sortObjArrByDateTime,
} from './time';

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
} from './type_checks';