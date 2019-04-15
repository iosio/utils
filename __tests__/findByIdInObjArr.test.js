import {findByIdInObjArr} from "../src/findByIdInObjArr";

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