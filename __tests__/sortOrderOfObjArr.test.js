import {sortOrderOfObjArr} from "../src/sortOrderOfObjArr";

describe('sortOrderOfObjArr', () => {

    const items = [{val: 1}, {val: 2}, {val: 'b'}, {val: 'c'}, {val: 'a'}];

    it('should return an ordered object array', () => {

        const results = sortOrderOfObjArr(items, 'val');

        // console.log(results)


        expect(results[0]).toEqual(expect.objectContaining(
            {val: 1}
        ));

        expect(results[1]).toEqual(expect.objectContaining(
            {val: 2}
        ));


        expect(results[2]).toEqual(expect.objectContaining(
            {val: 'a'}
        ));

        expect(results[3]).toEqual(expect.objectContaining(
            {val: 'b'}
        ));

        expect(results[4]).toEqual(expect.objectContaining(
            {val: 'c'}
        ));
    });



    it('should return a reverse ordered object array', () => {

        const results = sortOrderOfObjArr(items, 'val', true);

        // console.log(results)

        expect(results[0]).toEqual(expect.objectContaining(
            {val: 2}
        ));

        expect(results[1]).toEqual(expect.objectContaining(
            {val: 1}
        ));

        expect(results[2]).toEqual(expect.objectContaining(
            {val: 'c'}
        ));

        expect(results[3]).toEqual(expect.objectContaining(
            {val: 'b'}
        ));


        expect(results[4]).toEqual(expect.objectContaining(
            {val: 'a'}
        ));

    });

});