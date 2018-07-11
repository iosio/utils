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
    global.eventer = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   *
   * @param {object} all - pass an optional object to store handlers so that you can have the reference
   * @returns {{on: on, off: off, emit: emit}} - new eventer
   */
  var Eventer = exports.Eventer = function Eventer(all) {
    all = all || Object.create(null);

    return {
      /**
       * Register an event handler for the given event.
       *
       * @param  {String} event - event to listen for, or `"*"` for all events
       * @param  {Function} handler - Function to call in response to given event
       * @returns {undefined} - returns nothing
       */
      on: function on(event, handler) {
        return (all[event] || (all[event] = [])).push(handler);
      },

      /**
       * Remove an event handler for the given event.
       *
       * @param  {String} event - event to unregister `handler` from, or `"*"`
       * @param  {Function} handler -Handler function to remove
       * @returns {undefined} - returns nothing
       */
      off: function off(event, handler) {
        return all[event] && all[event].splice(all[event].indexOf(handler) >>> 0, 1);
      },

      /**
       * Destroys all event listeners off a event. (removes the key from the object)
       * 
       * @param {String} event - name of listener to destroy
       * @returns {undefined} - returns nothing
       */
      destroy: function destroy(event) {
        return delete all[event];
      },
      /**
       * Invoke all handlers for the given event.
       * If present, `"*"` handlers are invoked after event-matched handlers.
       *
       * @param {String} event  The event event to invoke
       * @param {*} data  Any value
       * @returns {undefined} - returns nothing
       */
      emit: function emit(event, data) {
        (all[event] || []).slice().map(function (fn) {
          return fn(data);
        });
        (all['*'] || []).slice().map(function (fn) {
          return fn(event, data);
        });
      }

    };
  };
});