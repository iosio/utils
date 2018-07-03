import {
    tryParse,
    allCaps,
    capFirstLet,
    capEveryFirst,
    capitalize,
    textReplacer,
    hasWord,
    numbersOnly
} from "../src/string_manipulation";


describe('string_manipulation', () => {

    describe('tryParse', () => {

        it('should parse the data safely', () => {

            const data = JSON.stringify({a: 1, b: 2, c: 3});

            const results = tryParse(data);

            expect(results).toEqual(
                expect.objectContaining(
                    {
                        ok: true,
                        data: expect.objectContaining({a: 1, b: 2, c: 3}),
                        error: false
                    }
                )
            );

        });


        it('should parse the data safely even with bad data', () => {

            const data = {a: 1};

            const results = tryParse(data);

            expect(results).toEqual(
                expect.objectContaining(
                    {
                        ok: false,
                        data: null,
                        error: "Unexpected token o in JSON at position 1"
                    }
                )
            );

        });
    });


    describe('allCaps', () => {

        it('should capitalize all letters', () => {
            const upper = 'ASDF';
            const lower = 'asdf';
            expect(allCaps(lower)).toBe(upper);
        });

    });


    describe('capFirstLet', () => {

        it('should capitalize first letter', () => {
            const upper = 'Asdf';
            const lower = 'asdf';
            expect(capFirstLet(lower)).toBe(upper);
        });

    });


    describe('capEveryFirst', () => {

        it('should capitalize first letter of every word', () => {
            const upper = 'I Lerk Gers Bermps Alerrt';
            const lower = 'i lerk gers bermps alerrt';
            expect(capEveryFirst(lower)).toBe(upper);
        });

    });


    describe('capitalize', () => {

        it('should capitalize all letters', () => {
            const upper = 'ASDF';
            const lower = 'asdf';
            expect(capitalize(lower)).toBe(upper);
        });

        it('should capitalize first letter', () => {
            const upper = 'Asdf';
            const lower = 'asdf';
            expect(capitalize(lower, 'first')).toBe(upper);
        });

        it('should capitalize first letter of every word', () => {
            const upper = 'I Lerk Gers Bermps Alerrt';
            const lower = 'i lerk gers bermps alerrt';
            expect(capitalize(lower, 'everyFirst')).toBe(upper);
        });

    });


    describe('textReplacer', () => {

        it('should capitalize first letter of every word', () => {

            const kabobCase = 'pickles_and_dog_food';

            const expected = 'pickles and dog food';

            expect(textReplacer(kabobCase, [{string: '_', with: ' '}])).toBe(expected);
        });

    });

    describe('hasWord', () => {

        it('should return true indicating a string contains a word', () => {

            const string = 'errr mer gherd i lerk gers burmps';

            expect(hasWord(string, 'gers burmps')).toBe(true);
        });

        it('should return true indicating a string contains a word', () => {

            const string = 'errr mer gherd i lerk gers burmps';

            expect(hasWord(string, 'gers burmpz')).toBe(false);
        });

    });


    describe('numbersOnly', () => {

        it('should return numbers only', () => {

            const string = 'errr1 me2r gher3d i4 ler5k g6ers 7burmps8';
            const expected = '12345678';

            expect(numbersOnly(string)).toBe(expected);
        });


    });


});
