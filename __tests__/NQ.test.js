import {NQ} from "../src/NQ";


import {isEmpty} from "../src/isEmpty";


describe('NQ', ()=>{

    it('should enqueue functions and invoke them when invokeQue is called', ()=>{

        const q = new NQ();

        const test_cb1 = jest.fn();
        const test_cb2 = jest.fn();
        const test_cb3 = jest.fn();

        q.enqueue(test_cb1);
        q.enqueue(test_cb2);
        q.enqueue(test_cb3);

        q.invokeQueue();

        expect(test_cb1).toHaveBeenCalledTimes(1);
        expect(test_cb2).toHaveBeenCalledTimes(1);
        expect(test_cb3).toHaveBeenCalledTimes(1);

        expect(isEmpty(q._queue)).toBe(true);
    });

    it('kill should clear the queue',()=>{

        const q = new NQ();

        const test_cb1 = jest.fn();
        const test_cb2 = jest.fn();
        const test_cb3 = jest.fn();

        q.enqueue(test_cb1);
        q.enqueue(test_cb2);
        q.enqueue(test_cb3);

        q.kill();

        q.invokeQueue();

        expect(test_cb1).toHaveBeenCalledTimes(0);
        expect(test_cb2).toHaveBeenCalledTimes(0);
        expect(test_cb3).toHaveBeenCalledTimes(0);

        expect(isEmpty(q._queue)).toBe(true);
    })
});

//
//
// // /**
// //  * enqueues functions to be called at a later time
// //  */
// // export class NQ {
// //     _queueCounter = 0;
// //     _queue = {};
// //     /**
// //      * enqueues a callback function to be called later
// //      * @param {function} callback - the function to add to the stack
// //      * @returns {undefined} - return nothing
// //      */
// //     enqueue = (callback) => {
// //         this._queue['q-' + (this._queueCounter++)] = callback
// //     };
// //     /**
// //      * clears all the enqueued callbacks
// //      */
// //     kill = () => {
// //         this._queue = {};
// //     };
// //     /**
// //      * calls all the callback functions in the queue and removes them after
// //      * @returns {undefined} - returns nothing
// //      */
// //     invokeQue = () => {
// //         const keys = Object.keys(this._queue);
// //         if (keys.length > 0) {
// //             keys.forEach((key) => {
// //                 this._queue[key]();
// //                 delete this._queue[key];
// //             })
// //         }
// //     }
// // }
