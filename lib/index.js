(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './util', './dom'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./util'), require('./dom'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.util, global.dom);
        global.index = mod.exports;
    }
})(this, function (exports, _util, _dom) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'hex2rgba', {
        enumerable: true,
        get: function () {
            return _util.hex2rgba;
        }
    });
    Object.defineProperty(exports, 'objEquivalent_deep', {
        enumerable: true,
        get: function () {
            return _util.objEquivalent_deep;
        }
    });
    Object.defineProperty(exports, 'closeEnough', {
        enumerable: true,
        get: function () {
            return _util.closeEnough;
        }
    });
    Object.defineProperty(exports, 'removeItemFromArray', {
        enumerable: true,
        get: function () {
            return _util.removeItemFromArray;
        }
    });
    Object.defineProperty(exports, 'removeItemFromArrayByIndex', {
        enumerable: true,
        get: function () {
            return _util.removeItemFromArrayByIndex;
        }
    });
    Object.defineProperty(exports, 'removeItemFromObjArrById', {
        enumerable: true,
        get: function () {
            return _util.removeItemFromObjArrById;
        }
    });
    Object.defineProperty(exports, 'findByIdInObjArr', {
        enumerable: true,
        get: function () {
            return _util.findByIdInObjArr;
        }
    });
    Object.defineProperty(exports, 'findByIdInObjArr_give_index', {
        enumerable: true,
        get: function () {
            return _util.findByIdInObjArr_give_index;
        }
    });
    Object.defineProperty(exports, 'updateItemInObjArrById', {
        enumerable: true,
        get: function () {
            return _util.updateItemInObjArrById;
        }
    });
    Object.defineProperty(exports, 'searchInObj', {
        enumerable: true,
        get: function () {
            return _util.searchInObj;
        }
    });
    Object.defineProperty(exports, 'searchInObj_update', {
        enumerable: true,
        get: function () {
            return _util.searchInObj_update;
        }
    });
    Object.defineProperty(exports, 'objectIsEmpty', {
        enumerable: true,
        get: function () {
            return _util.objectIsEmpty;
        }
    });
    Object.defineProperty(exports, 'arrayIsEmpty', {
        enumerable: true,
        get: function () {
            return _util.arrayIsEmpty;
        }
    });
    Object.defineProperty(exports, 'isEmpty', {
        enumerable: true,
        get: function () {
            return _util.isEmpty;
        }
    });
    Object.defineProperty(exports, 'filterObjArrByProp', {
        enumerable: true,
        get: function () {
            return _util.filterObjArrByProp;
        }
    });
    Object.defineProperty(exports, 'filterArray', {
        enumerable: true,
        get: function () {
            return _util.filterArray;
        }
    });
    Object.defineProperty(exports, 'sortOrderOfObjArr', {
        enumerable: true,
        get: function () {
            return _util.sortOrderOfObjArr;
        }
    });
    Object.defineProperty(exports, 'uniquesInArray', {
        enumerable: true,
        get: function () {
            return _util.uniquesInArray;
        }
    });
    Object.defineProperty(exports, 'itemsInArray1NotInArray2', {
        enumerable: true,
        get: function () {
            return _util.itemsInArray1NotInArray2;
        }
    });
    Object.defineProperty(exports, 'objectHasProp', {
        enumerable: true,
        get: function () {
            return _util.objectHasProp;
        }
    });
    Object.defineProperty(exports, 'isInArray', {
        enumerable: true,
        get: function () {
            return _util.isInArray;
        }
    });
    Object.defineProperty(exports, 'hasDupsInObjArr_onProp', {
        enumerable: true,
        get: function () {
            return _util.hasDupsInObjArr_onProp;
        }
    });
    Object.defineProperty(exports, 'deepClone', {
        enumerable: true,
        get: function () {
            return _util.deepClone;
        }
    });
    Object.defineProperty(exports, 'idgen', {
        enumerable: true,
        get: function () {
            return _util.idgen;
        }
    });
    Object.defineProperty(exports, 'uniqueID', {
        enumerable: true,
        get: function () {
            return _util.uniqueID;
        }
    });
    Object.defineProperty(exports, 'tryParse', {
        enumerable: true,
        get: function () {
            return _util.tryParse;
        }
    });
    Object.defineProperty(exports, 'allCaps', {
        enumerable: true,
        get: function () {
            return _util.allCaps;
        }
    });
    Object.defineProperty(exports, 'capFirstLet', {
        enumerable: true,
        get: function () {
            return _util.capFirstLet;
        }
    });
    Object.defineProperty(exports, 'capEveryFirst', {
        enumerable: true,
        get: function () {
            return _util.capEveryFirst;
        }
    });
    Object.defineProperty(exports, 'capitalize', {
        enumerable: true,
        get: function () {
            return _util.capitalize;
        }
    });
    Object.defineProperty(exports, 'textReplacer', {
        enumerable: true,
        get: function () {
            return _util.textReplacer;
        }
    });
    Object.defineProperty(exports, 'hasWord', {
        enumerable: true,
        get: function () {
            return _util.hasWord;
        }
    });
    Object.defineProperty(exports, 'numbersOnly', {
        enumerable: true,
        get: function () {
            return _util.numbersOnly;
        }
    });
    Object.defineProperty(exports, 'sortObjArrByDateTime', {
        enumerable: true,
        get: function () {
            return _util.sortObjArrByDateTime;
        }
    });
    Object.defineProperty(exports, 'toString', {
        enumerable: true,
        get: function () {
            return _util.toString;
        }
    });
    Object.defineProperty(exports, 'typeOf', {
        enumerable: true,
        get: function () {
            return _util.typeOf;
        }
    });
    Object.defineProperty(exports, 'isNaN', {
        enumerable: true,
        get: function () {
            return _util.isNaN;
        }
    });
    Object.defineProperty(exports, 'isUndefined', {
        enumerable: true,
        get: function () {
            return _util.isUndefined;
        }
    });
    Object.defineProperty(exports, 'isNull', {
        enumerable: true,
        get: function () {
            return _util.isNull;
        }
    });
    Object.defineProperty(exports, 'isNumber', {
        enumerable: true,
        get: function () {
            return _util.isNumber;
        }
    });
    Object.defineProperty(exports, 'isObject', {
        enumerable: true,
        get: function () {
            return _util.isObject;
        }
    });
    Object.defineProperty(exports, 'isArray', {
        enumerable: true,
        get: function () {
            return _util.isArray;
        }
    });
    Object.defineProperty(exports, 'isString', {
        enumerable: true,
        get: function () {
            return _util.isString;
        }
    });
    Object.defineProperty(exports, 'isFunction', {
        enumerable: true,
        get: function () {
            return _util.isFunction;
        }
    });
    Object.defineProperty(exports, 'isRegexp', {
        enumerable: true,
        get: function () {
            return _util.isRegexp;
        }
    });
    Object.defineProperty(exports, 'isDate', {
        enumerable: true,
        get: function () {
            return _util.isDate;
        }
    });
    Object.defineProperty(exports, 'isTruthy', {
        enumerable: true,
        get: function () {
            return _util.isTruthy;
        }
    });
    Object.defineProperty(exports, 'loadLink', {
        enumerable: true,
        get: function () {
            return _dom.loadLink;
        }
    });
    Object.defineProperty(exports, 'loadScript', {
        enumerable: true,
        get: function () {
            return _dom.loadScript;
        }
    });
    Object.defineProperty(exports, 'noScroll', {
        enumerable: true,
        get: function () {
            return _dom.noScroll;
        }
    });
});