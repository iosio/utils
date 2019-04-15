'use strict';

exports.__esModule = true;
/**
 * helper function for local storage crud
 * @type {{destroyAll: lsdb.destroyAll, set: lsdb.set, get: (function(String): boolean), destroy: lsdb.destroy}}
 */
var lsdb = exports.lsdb = {
  /**
   * store a value
   * @param {String} key - name of the thing you are storing
   * @param {*} val - the thing you want to store. should be stringifiable
   * @returns {Undefined} - returns nothing
   */
  set: function set(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  /**
   * get a value
   * @param {String} key - name of the value you want
   * @returns {*|Boolean} - false if the value is not there
   */
  get: function get(key) {
    var item = window.localStorage.getItem(key);
    return item && item !== 'undefined' ? JSON.parse(item) : false;
  },
  /**
   * removes an item from storage
   * @param {String} key - the name of the thing you want to destroy
   * @returns {Undefined} - returns nothing
   */
  destroy: function destroy(key) {
    window.localStorage.removeItem(key);
  },
  /**
   * destroys everything in local storage
   * @returns {Undefined} - returns nothing
   */
  destroyAll: function destroyAll() {
    window.localStorage.clear();
  }
};