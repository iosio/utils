"use strict";

exports.__esModule = true;
exports.camelCase = undefined;

var _capitialize = require("./capitialize");

var _textReplacer = require("./textReplacer");

var replacements1 = [{ string: '_', with: ' ' }, { string: '.', with: ' ' }, { string: '-', with: ' ' }];
var camelCase = exports.camelCase = function camelCase(value) {
    value = (0, _textReplacer.textReplacer)(value, replacements1);
    value = (0, _capitialize.capitalize)(value, 'everyFirst');
    value = (0, _textReplacer.textReplacer)(value, [{ string: ' ', with: '' }]);
    return value.charAt(0).toLowerCase() + value.slice(1);
};