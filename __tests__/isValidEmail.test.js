import {isValidEmail} from "../src/isValidEmail";

describe('isValidEmail', () => {

    it('should return true for a valid email', () => {

        expect(isValidEmail('weston@asdf.com')).toBe(true);
        expect(isValidEmail('weston@asdf.io')).toBe(true);
    });

    it('should return false for an incorrectly formatted email', () => {

        expect(isValidEmail('weston@asdf.c')).toBe(false);
        expect(isValidEmail('weston.')).toBe(false);
        expect(isValidEmail('weston.asdf.com')).toBe(false);
        expect(isValidEmail('@asdf.com')).toBe(false);
        expect(isValidEmail('s@.com')).toBe(false);
    });

});