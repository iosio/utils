import {objectIsEmpty, arrayIsEmpty, isEmpty} from "../src/empty_checks";

describe('empty_checks', () => {

    describe('objectIsEmpty', () => {
        it('should return false indicating that the object is not empty', () => {
            expect(objectIsEmpty({a: 'asdf'})).toEqual(false)
        });

        it('should return true indicating that the object is empty', () => {
            expect(objectIsEmpty({})).toEqual(true)
        });

    });



    describe('arrayIsEmpty', () => {
        it('should return false indicating that the array is not empty', () => {
            expect(arrayIsEmpty(['asdf'])).toEqual(false)
        });

        it('should return true indicating that the array is empty', () => {
            expect(arrayIsEmpty([])).toEqual(true)
        });

    });




    describe('isEmpty', () => {
        it('should return false indicating that the array is not empty', () => {
            expect(isEmpty(['asdf'])).toEqual(false)
        });

        it('should return true indicating that the object is empty', () => {
            expect(isEmpty({})).toEqual(true)
        });

        it('should return false indicating that the value is not empty', () => {
            expect(isEmpty(true)).toEqual(false)
        });

    });


});