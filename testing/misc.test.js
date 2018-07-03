import {deepClone} from "../src/misc";

describe('misc', () => {

    describe('deepClone', () => {
        it('should make a copy of the object', () => {
            let obj1 = {a:1, b: 2};
            let obj2 = deepClone(obj1);
            obj2.a = 2;
            expect(obj2.a).toBe(2);
            expect(obj1.a).toBe(1);
        });

    });
});
