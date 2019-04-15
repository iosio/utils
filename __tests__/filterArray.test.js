import {filterArray} from "../src/filterArray";

describe('filterArray', () => {

    const items = ['a', 'a', 'b', 'c', 1, 0, true, false];


    it('should return an array of items containing the search value', () => {

        const results = filterArray(items, 'a');
        expect(results).toEqual(
            expect.arrayContaining(['a', 'a'])
        )

    });
    it('should return the item containing the matching property value', () => {

        const results = filterArray(items, 'asdf');
        expect(results).toEqual([])

    });
});