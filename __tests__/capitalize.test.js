import {allCaps, capEveryFirst, capFirstLet, capitalize} from "../src/capitialize";



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