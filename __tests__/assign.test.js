import {assign} from "../src/assign";

describe('assign', () => {
    it('assigns properties from one object to the other', () => {

        const obj1 = {a: 1, b: 2, c: 3};
        const obj2 = {d: 4, e: 5, f: 6};

        const result = assign(obj1, obj2);


        expect(result).toStrictEqual({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6});

    });

    it('does not reflect mutations from the original object', () => {

        const obj1 = {a: 1, b: 2, c: 3};
        const obj2 = {d: 4, e: 5, f: 6};

        const result = assign({}, assign(obj1, obj2));

        obj1.a = 'mutate';
        obj2.e = 'mutate';

        expect(result).toStrictEqual({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6});

    })
});
