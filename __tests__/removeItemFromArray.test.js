import {removeItemFromArray} from "../src/removeItemFromArray";


describe('removeItemFromArray', () => {
    it('should remove the string item from the array and return the array', () => {
        const array = ['a', 'c', 'b'];
        const expected = ['b', 'c'];

        expect(removeItemFromArray('a', array)).toEqual(
            expect.arrayContaining(expected)
        )

    })

});


// /**
//  * removes an item from an array
//  * @param {String|Number|Boolean|NaN} item - to remove
//  * @param {Array} arr - array to filter
//  * @returns {Array} - the updated array
//  */
// export const removeItemFromArray = (item, arr) => {
//     arr.splice(arr.indexOf(item), 1);
//     return arr;
// };
