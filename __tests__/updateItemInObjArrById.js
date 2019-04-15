import {updateItemInObjArrById} from "../src/updateItemInObjArrById";

describe('updateItemInObjArrById', () => {
    it('should return the index of the object in the array by its id', () => {
        const array = [
            {id: '0', name: 'a'},
            {id: '1', name: 'b'},
            {id: '2', name: 'c'},
            {id: '3', name: 'd'},
        ];

        const update_to = {id: '3', name: 'asdf'};

        expect(updateItemInObjArrById(array, 'id', '3', update_to)).toEqual(
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
                    {id: '3', name: 'asdf'}
                )
            ])
        );

    });

});