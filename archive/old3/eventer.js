/**
 * Synthetic event handler
 *
 * @example
 *
 * const events = new Eventer();
 *
 * const SOME_EVENT = 'some_event';
 *
 * const doThisWhenItHappens = ()=>console.log('it happened!');
 *
 * events.on(SOME_EVENT, doThisWhenItHappens);
 *
 * @param {object|undefined} all - pass an optional object to store handlers so that you can have the reference
 * @returns {{on: on, off: off, emit: emit}} - new eventer
 */
export const Eventer = (all) => {
    all = all || Object.create(null);


    /**
     * Register an event handler for the given event.
     *
     * @param  {String} event - event to listen for, or `"*"` for all events
     * @param  {Function} handler - Function to call in response to given event
     * @returns {undefined} - returns nothing
     */
    const on = (event, handler) => (all[event] || (all[event] = [])).push(handler);

    /**
     * Remove an event handler for the given event.
     *
     * @param  {String} event - event to unregister `handler` from, or `"*"`
     * @param  {Function} handler -Handler function to remove
     * @returns {undefined} - returns nothing
     */
    const off = (event, handler) => all[event] && all[event].splice(all[event].indexOf(handler) >>> 0, 1);

    /**
     * incremented to provide a unique identifier for the once function
     * @type {number}
     */
    let counter = 0;

    /**
     * calls the handler once and only once on the first event emit per callee
     *
     * @param event
     * @param handler
     * @returns {Function} - for cases where unregistering the event is needed prior to the event being fired
     * example of unregistering:
     *  const unregister = events.once('some_event', someFunc);
     *  if(someCondition){
     *      unregister();
     *  }
     */
    const once = (event, handler) => {
        const func = {};
        const ename = event + '_' + (counter++) + '_';
        const oneTimeCall = ename + 'only_called_once';
        const unregister = ()=> off(event, func[oneTimeCall]);
        func[oneTimeCall] = () => {
            handler && handler();
            unregister();
        };
        on(event, func[oneTimeCall]);
        return unregister;
    };

    return {
        on,
        off,
        once,
        /**
         * Destroys all event listeners off a event. (removes the key from the object)
         *
         * @param {String} event - name of listener to destroy
         * @returns {undefined} - returns nothing
         */
        destroy: (event) => delete all[event],
        /**
         * Invoke all handlers for the given event.
         * If present, `"*"` handlers are invoked after event-matched handlers.
         *
         * @param {String} event  The event event to invoke
         * @param {*} data  Any value
         * @returns {undefined} - returns nothing
         */
        emit: function emit(event, data) {
            (all[event] || []).slice().map((fn) => fn(data));
            (all['*'] || []).slice().map((fn) => fn(event, data));
        }

    };
};
