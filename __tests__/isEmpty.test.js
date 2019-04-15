import {isEmpty} from "../src/isEmpty";

describe('isEmpty', () => {
    it('should return false indicating that the array is not empty', () => {
        expect(isEmpty(['asdf'])).toEqual(false)
    });

    it('should return true indicating that the object is empty', () => {
        expect(isEmpty({})).toEqual(true)
    });

    it('should return false indicating that the value is not empty and truthy', () => {
        expect(isEmpty(true)).toEqual(false)
    });

});