(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "./capitialize", "./textReplacer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./capitialize"), require("./textReplacer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.capitialize, global.textReplacer);
        global.camelCase = mod.exports;
    }
})(this, function (exports, _capitialize, _textReplacer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.camelCase = undefined;


    var replacements1 = [{ string: '_', with: ' ' }, { string: '.', with: ' ' }, { string: '-', with: ' ' }];
    var camelCase = exports.camelCase = function camelCase(value) {
        value = (0, _textReplacer.textReplacer)(value, replacements1);
        value = (0, _capitialize.capitalize)(value, 'everyFirst');
        value = (0, _textReplacer.textReplacer)(value, [{ string: ' ', with: '' }]);
        return value.charAt(0).toLowerCase() + value.slice(1);
    };
});