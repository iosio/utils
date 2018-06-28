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
        global.redux = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     *
     * builds a subscription callback
     *
     * ex:
     *
     *  const subscribe = {};
     *  subscribe.pathname = buildSubscribe(store, (state) => state.router.location.pathname);
     *
     *  this.unsubscribe = subscribe.pathname((change)=>{
     *      console.log(change) // '/homepage'
     *  });
     *
     *  //unsubscribe in componentWillUnmount
     *
     *  this.unsubscribe()
     *
     *
     * @param {Object} store - redux store
     * @param {Function] select - (state) => state.router.location.path
     * @returns {function(*=): *} - returns a subscribe function
     */
    var buildSubscribe = exports.buildSubscribe = function buildSubscribe(store, select) {

        return function (cb) {
            var currentValue = select(store.getState());
            var handleChange = function handleChange() {
                var previousCange = currentValue;

                currentValue = select(store.getState());

                if (previousCange !== currentValue) {
                    cb && cb(currentValue);
                }
            };

            return store.subscribe(handleChange);
        };
    };
});