import {
    removeItemFromArray,
    removeItemFromArrayByIndex,
    removeItemFromObjArrById,
    findByIdInObjArr,
    findByIdInObjArr_give_index,
    updateItemInObjArrById,
} from '../src/crud_operations';


    describe('crud operations', () => {

        describe('removeItemFromArray', () => {
            it('should remove the string item from the array and return the array', () => {
                const array = ['a', 'c', 'b'];
                const expected = ['b', 'c'];

                expect(removeItemFromArray('a', array)).toEqual(
                    expect.arrayContaining(expected)
                )

            })

        });

    describe('removeItemFromArrayByIndex', () => {
        it('should remove the item from the array by its index and return the array', () => {
            const array = ['a', 'c', 'b'];
            const expected = ['b', 'c'];

            expect(removeItemFromArrayByIndex(array, 0)).toEqual(
                expect.arrayContaining(expected)
            )

        })

    });

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

    describe('findByIdInObjArr', () => {
        it('should return object from object array by id', () => {
            const array = [
                {id: '0', name: 'a'},
                {id: '1', name: 'b'},
                {id: '2', name: 'c'},
                {id: '3', name: 'd'},
            ];

            const expected = {id: '3', name: 'd'};

            expect(findByIdInObjArr(array, 'id', '3')).toEqual(
                expect.objectContaining(expected)
            )

        });

        it('should return false if not found', () => {
            const array = [
                {id: '0', name: 'a'},
                {id: '1', name: 'b'},
                {id: '2', name: 'c'},
                {id: '3', name: 'd'},
            ];

            expect(findByIdInObjArr(array, 'id', 'asdf')).toBe(false)

        });

    });


    describe('findByIdInObjArr_give_index', () => {
        it('should return the index of the object in the array by its id', () => {
            const array = [
                {id: '0', name: 'a'},
                {id: '1', name: 'b'},
                {id: '2', name: 'c'},
                {id: '3', name: 'd'},
            ];

            expect(findByIdInObjArr_give_index(array, 'id', '3')).toBe(3)

        });

        it('should return false if not found', () => {
            const array = [
                {id: '0', name: 'a'},
                {id: '1', name: 'b'},
                {id: '2', name: 'c'},
                {id: '3', name: 'd'},
            ];

            expect(findByIdInObjArr_give_index(array, 'id', 'asdf')).toBe(false)

        });

    });


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


});


