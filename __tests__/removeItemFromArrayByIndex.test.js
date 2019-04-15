import {removeItemFromArrayByIndex} from "../src/removeItemFromArrayByIndex";

describe('removeItemFromArrayByIndex', () => {
    it('should remove the item from the array by its index and return the array', () => {
        const array = ['a', 'c', 'b'];
        const expected = ['b', 'c'];

        expect(removeItemFromArrayByIndex(array, 0)).toEqual(
            expect.arrayContaining(expected)
        )

    })

});