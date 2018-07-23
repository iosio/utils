(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.textReplacer = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * helper function to replace characters in a string with another value
     * @param {String} string - to replaces chars in
     * @param {Array} arr - an array of objects containing the key values to find and replace : string - to find, with - to replace with
     * @returns {String} - updated string
     */
    var textReplacer = exports.textReplacer = function textReplacer(string) {
        var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{ string: '', with: '' }];

        var _text = string;
        arr.forEach(function (obj) {
            _text = _text.split(obj.string).join(obj.with);
        });
        return _text;
    };
});