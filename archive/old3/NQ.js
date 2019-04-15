/**
 * enqueues functions to be called at a later time
 */
export class NQ {
    _queueCounter = 0;
    _queue = {};
    /**
     * enqueues a callback function to be called later
     * @param {function} callback - the function to add to the stack
     * @returns {undefined} - return nothing
     */
    enqueue = (callback) => {
        this._queue['q-' + (this._queueCounter++)] = callback
    };
    /**
     * clears all the enqueued callbacks
     */
    kill = () => {
        this._queue = {};
    };
    /**
     * calls all the callback functions in the queue and removes them after
     * @returns {undefined} - returns nothing
     */
    invokeQue = () => {
        const keys = Object.keys(this._queue);
        if (keys.length > 0) {
            keys.forEach((key) => {
                this._queue[key]();
                delete this._queue[key];
            })
        }
    }
}
