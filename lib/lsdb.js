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
    global.lsdb = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ls = window.localStorage;
  /*
   * helper function for local storage crud
   */
  var lsdb = exports.lsdb = {
    /**
     * store a value
     * @param {String} key - name of the thing you are storing
     * @param {*} val - the thing you want to store. should be stringifiable
     * @returns {Undefined} - returns nothing
     */
    set: function set(key, val) {
      ls.setItem(key, JSON.stringify(val));
    },
    /**
     * get a value
     * @param {String} key - name of the value you want
     * @returns {*|Boolean} - false if the value is not there
     */
    get: function get(key) {
      var item = ls.getItem(key);
      return item !== null ? JSON.parse(item) : false;
    },
    /**
     * removes an item from storage
     * @param {String} key - the name of the thing you want to destroy
     * @returns {Undefined} - returns nothing
     */
    destroy: function destroy(key) {
      ls.removeItem(key);
    },
    /**
     * destroys everything in local storage
     * @returns {Undefined} - returns nothing
     */
    destroyAll: function destroyAll() {
      ls.clear();
    }
  };
});