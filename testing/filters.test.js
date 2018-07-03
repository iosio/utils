import {filterObjArrByProp, filterArray, sortOrderOfObjArr, uniquesInArray} from "../src/filters";


describe('filters', () => {

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


});

