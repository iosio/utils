import {hasWord, hasWords} from "../src/hasWord";

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

describe('hasWords', () => {

    it('should return true indicating a string contains multiple words', () => {

        const string = 'errr mer gherd i lerk gers burmps';

        expect(hasWords(string, ['errr', 'gherd'])).toBe(true);
    });

    it('should return true indicating a string contains a word', () => {

        const string = 'errr mer gherd i lerk gers burmps';

        expect(hasWords(string, ['errr', 'gherds'])).toBe(false);
    });



});