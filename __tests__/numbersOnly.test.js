import {numbersOnly} from "../src/numbersOnly";

describe('numbersOnly', () => {

    it('should return numbers only', () => {

        const string = 'errr1 me2r gher3d i4 ler5k g6ers 7burmps8';
        const expected = '12345678';

        expect(numbersOnly(string)).toBe(expected);
    });


});