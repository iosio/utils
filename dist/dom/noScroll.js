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
        global.noScroll = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var scrollX = exports.scrollX = function scrollX() {
        return window.pageXOffset || window.document.documentElement.scrollLeft;
    };
    var scrollY = exports.scrollY = function scrollY() {
        return window.pageYOffset || window.document.documentElement.scrollTop;
    };

    //scroll stuff


    var getScrollbarWidth = exports.getScrollbarWidth = function getScrollbarWidth() {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    };

    var lockScroll = false;

    var ns = function ns() {
        var xscroll = void 0,
            yscroll = void 0;
        if (!lockScroll) {
            lockScroll = true;
            xscroll = scrollX();
            yscroll = scrollY();
        }
        window.scrollTo(xscroll, yscroll);
    };

    var prepareNoscroll = function prepareNoscroll(addPadding) {

        var theBody = document.getElementsByTagName('body')[0];
        var bodyHeight = theBody.getBoundingClientRect().height;

        if (addPadding) {

            if (bodyHeight > window.innerHeight) {
                theBody.style.width = window.innerWidth - getScrollbarWidth() + "px";
            }
        } else {
            theBody.style.width = '100%';
        }
    };

    var noScroll = exports.noScroll = function noScroll(dissable_scroll) {
        var bodyFix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (dissable_scroll) {
            document.body.style.overflow = 'hidden';
            if (bodyFix) {
                prepareNoscroll(true);
            }
            window.document.addEventListener('scroll', ns);
        } else {
            document.body.style.overflow = 'initial';
            if (bodyFix) {
                prepareNoscroll(false);
            }
            lockScroll = false;
            window.document.removeEventListener('scroll', ns);
        }
    };
});