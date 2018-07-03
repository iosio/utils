import {getRandomName, getRandomDate,getRandomText, getRandomOneOf} from "../src/rando";
import {isString} from "../src/type_checks";
import {isInArray} from "../src/has_checks";

describe('rando', () => {

    describe('getRandomName', () => {
        it('should return two random names', () => {
            const result = getRandomName().split(' ');
            expect(result.length).toEqual(2)
            expect(isString(result[0])).toBeTruthy();
            expect(isString(result[1])).toBeTruthy();

        });
    });


    describe('getRandomDate', () => {
        it('should return random iso date', () => {
            const result = getRandomDate();
            expect(result).toMatch(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/gm);

        });
    });

    describe('getRandomText', () => {
        it('should return random text', () => {
            const result = getRandomText();

            expect(result.length > 0).toBe(true);
            expect(isString(result)).toBe(true);

        });
    });


    describe('getRandomOneOf', () => {
        it('should return a random item in the array', () => {
            const arr = ['a', 'b', 'c'];
            const result = getRandomOneOf(arr);
            expect(isInArray(result, arr)).toBe(true);
            expect(isInArray(result, arr)).toBe(true);
            expect(isInArray(result, arr)).toBe(true);
            expect(isInArray(result, arr)).toBe(true);
            expect(isInArray(result, arr)).toBe(true);
            expect(isInArray(result, arr)).toBe(true);
        });
    });







});