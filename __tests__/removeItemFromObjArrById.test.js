import {removeItemFromObjArrById} from "../src/removeItemFromObjArrById";

describe('removeItemFromObjArrById', () => {

    it('should remove the object from the array by its id and return the array', () => {
        const array = [
            {id: '0', name: 'a'},
            {id: '1', name: 'b'},
            {id: '2', name: 'c'},
            {id: '3', name: 'd'},
        ];

        let results = removeItemFromObjArrById(array, 'id', '2');
        expect(results).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                    {id: '0', name: 'a'}
                ),
                expect.objectContaining(
                    {id: '1', name: 'b'}
                ),
                expect.objectContaining(
                    {id: '3', name: 'd'}
                )
            ])
        )

    });

    it('should return array if not found', () => {

        const array = [
            {id: '0', name: 'a'},
            {id: '1', name: 'b'},
            {id: '2', name: 'c'},
            {id: '3', name: 'd'},
        ];

        let results = removeItemFromObjArrById(array, 'id', 'asdf');

        expect(results).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                    {id: '0', name: 'a'}
                ),
                expect.objectContaining(
                    {id: '1', name: 'b'}
                ),
                expect.objectContaining(
                    {id: '2', name: 'c'}
                ),
                expect.objectContaining(
                    {id: '3', name: 'd'}
                )
            ])
        );

    });


});