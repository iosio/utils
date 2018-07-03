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
        window.localStorage.setItem(key, JSON.stringify(val));
    },
    /**
     * get a value
     * @param {String} key - name of the value you want
     * @returns {*|Boolean} - false if the value is not there
     */
    get: (key) => {
        let item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : false;
    },
    /**
     * removes an item from storage
     * @param {String} key - the name of the thing you want to destroy
     * @returns {Undefined} - returns nothing
     */
    destroy: (key) => {
        window.localStorage.removeItem(key);
    },
    /**
     * destroys everything in local storage
     * @returns {Undefined} - returns nothing
     */
    destroyAll: () => {
        window.localStorage.clear();
    },
};