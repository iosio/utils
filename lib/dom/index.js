(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './loaders', 'noScroll'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./loaders'), require('noScroll'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.loaders, global.noScroll);
        global.index = mod.exports;
    }
})(this, function (exports, _loaders, _noScroll) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'domReady', {
        enumerable: true,
        get: function () {
            return _loaders.domReady;
        }
    });
    Object.defineProperty(exports, 'loadLink', {
        enumerable: true,
        get: function () {
            return _loaders.loadLink;
        }
    });
    Object.defineProperty(exports, 'loadScript', {
        enumerable: true,
        get: function () {
            return _loaders.loadScript;
        }
    });
    Object.defineProperty(exports, 'noScroll', {
        enumerable: true,
        get: function () {
            return _noScroll.noScroll;
        }
    });
});