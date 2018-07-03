import {lsdb} from "../src/lsdb";
import {isEmpty} from "../src/empty_checks";

const mock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key],
        getAll: () => store,
        setItem: (key, value) => store[key] = value,
        removeItem: (key) => delete store[key],
        clear: () => store = {}
    }
})();

Object.defineProperty(window, 'localStorage', {
    value: mock
});


describe('lsdb', () => {


    // console.log(window.localStorage)
    it('should set item in storage', () => {
        lsdb.set('a', '123');
        expect(lsdb.get('a')).toEqual('123')
    });

    it('should remove item from storage', () => {
        lsdb.destroy('a');
        expect(lsdb.get('a')).toEqual(false);
    });

    it('should clear local storage', () => {
        lsdb.destroyAll();
        expect(isEmpty(window.localStorage.getAll())).toEqual(true)
    });


});