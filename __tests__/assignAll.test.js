import {assignAll} from "../src/assignAll";

describe('assignAll', () => {

    it('should assign multiple objects', () => {

        const obj1 = {a: '1'};
        const obj2 = {b: '2'};
        const obj3 = {c: '3'};
        const obj4 = {d: '4', e: '5', f: '6'};

        const result = assignAll(obj1, [obj2, obj3, obj4]);

        const expected = {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6'}
        expect(result).toMatchObject(expected);

        obj3.c = 'asdf';

        expect(result).toMatchObject(expected);

        const result2 = assignAll({}, [{b: '2'}, {c: '3'}, {d: '4', e: '5', f: '6'}]);
        expect(result2).toMatchObject({ b: '2', c: '3', d: '4', e: '5', f: '6'});
    })
})