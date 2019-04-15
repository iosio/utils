import {findByIdInObjArr_give_index} from "../src/findByIdInObjArr_give_index";

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