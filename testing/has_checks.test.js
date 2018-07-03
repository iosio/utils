import {isInArray} from "../src/has_checks";


describe('has_checks', () => {



    describe('isInArray', () => {
        it('should return true indicating that the item is in the array', () => {
            expect(isInArray('a', ['a', 'b', 0])).toEqual(true)
        });

        it('should return true indicating that the item is in the array', () => {
            expect(isInArray(1, [1, 2, 3])).toEqual(true)
        });

        it('should return false indicating that the item is not in the array', () => {
            expect(isInArray(1, [0, 2, 3])).toEqual(false)
        });


    });


});