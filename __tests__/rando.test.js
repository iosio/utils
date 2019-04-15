import {getRandomDate, getRandomInt,getRandomName,getRandomOneOf,getRandomText} from "../src/rando";

describe('rando', () => {

    describe('getRandomName', () => {
        it('should return two random names', () => {
            const result = getRandomName()
            expect(typeof result === 'string').toBe(true);
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
            expect(typeof result === 'string').toBe(true);

        });
    });


    describe('getRandomOneOf', () => {
        it('should return a random item in the array', () => {
            const arr = ['a', 'b', 'c'];
            const result = getRandomOneOf(arr);
            expect(arr.includes(result)).toBe(true);
        });
    });



});