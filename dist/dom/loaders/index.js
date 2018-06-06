(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.index = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.loadScript = loadScript;
    exports.loadLink = loadLink;
    //
    // export const domReady = (cb) => {
    //
    //     import('./docReady.js').then(() => {
    //         window.docReady(cb);
    //     });
    //
    // };

    function loadScript(url, cb) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            //IE
            script.onreadystatechange = function () {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    cb && cb();
                }
            };
        } else {
            //Others
            script.onload = function () {
                cb && cb();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    function loadLink(url, cb) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;

        if (link.readyState) {
            //IE
            link.onreadystatechange = function () {
                if (link.readyState === "loaded" || link.readyState === "complete") {
                    link.onreadystatechange = null;
                    cb && cb();
                }
            };
        } else {
            //Others
            link.onload = function () {
                cb && cb();
            };
        }

        link.src = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
});