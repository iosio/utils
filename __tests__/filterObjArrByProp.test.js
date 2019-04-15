import {filterObjArrByProp} from "../src/filterObjArrByProp";

describe('filterObjArrByProp', () => {

    const items = [{a: 'xyz'}, {a: 'xyzz'}, {a: 'abc'}, {a: 123}, {a: true}];


    it('should return an array of objects containing the matching property value', () => {
        const results = filterObjArrByProp(items, 'a', 'xyz');
        expect(results).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                    {a: 'xyz'}
                ),
                expect.objectContaining(
                    {a: 'xyzz'}
                ),

            ])
        )

    });

    it('should return an empty array', () => {
        const results = filterObjArrByProp(items, 'a', '33');
        expect(results).toEqual([])

    });
});
