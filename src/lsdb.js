
let ls = window.localStorage;
/*
 * helper function for local storage crud
 */
export const lsdb = {
    /**
     * store a value
     * @param {String} key - name of the thing you are storing
     * @param {*} val - the thing you want to store. should be stringifiable
     * @returns {Undefined} - returns nothing
     */
    set: (key, val) => {
        ls.setItem(key, JSON.stringify(val));
    },
    /**
     * get a value
     * @param {String} key - name of the value you want
     * @returns {*|Boolean} - false if the value is not there
     */
    get: (key) => {
        let item = ls.getItem(key);
        return item !== null ? JSON.parse(item) : false;
    },
    /**
     * removes an item from storage
     * @param {String} key - the name of the thing you want to destroy
     * @returns {Undefined} - returns nothing
     */
    destroy: (key) => {
        ls.removeItem(key);
    },
    /**
     * destroys everything in local storage
     * @returns {Undefined} - returns nothing
     */
    destroyAll: () => {
        ls.clear();
    },
};
