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
export const buildSubscribe = (store, select) => {

    return (cb) => {
        let currentValue = select(store.getState());
        const handleChange = () => {
            let previousCange = currentValue;

            currentValue = select(store.getState());

            if (previousCange !== currentValue) {
                cb && cb(currentValue);
            }
        };

        return store.subscribe(handleChange);
    };
};