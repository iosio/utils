/**
 * subscribe to notifications
 * @returns {{subscribe: (function(*=): function(): void), unsubscribe: unsubscribe, notify: notify}}
 * @constructor
 */
export const Subscription = () => {
    let subs = [];
    const unsubscribe = sub => {
        let out = [];
        for (let i = 0; i < subs.length; i++) {
            if (subs[i] === sub) sub = null;
            else out.push(subs[i]);
        }
        subs = out;
    };
    return {
        subscribe: (listener) => {
            subs.push(listener);
            return () => unsubscribe(listener);
        },
        unsubscribe,
        notify: (data) => {
            let current = subs;
            for (let i = 0; i < current.length; i++) current[i](data);
        }
    }
};

