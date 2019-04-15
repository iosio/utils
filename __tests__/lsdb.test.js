import {lsdb} from "../src/lsdb";



describe('lsdb', () => {


    it('should set and get item in storage', () => {
        lsdb.set('a', '123');
        expect(lsdb.get('a')).toEqual('123')
    });

    it('should remove item from storage', () => {
        lsdb.destroy('a');
        expect(lsdb.get('a')).toEqual(false);
    });


    it('should clear local storage', () => {
        lsdb.set('a', '123');
        lsdb.set('b', '456');
        lsdb.set('c', '789');

        lsdb.destroyAll();

        const result1 = lsdb.get('a');
        const result2 = lsdb.get('b');
        const result3 = lsdb.get('c');

        expect(result1).toEqual(false);
        expect(result2).toEqual(false);
        expect(result3).toEqual(false);
    });


});