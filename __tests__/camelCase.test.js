import {camelCase} from "../src/camelCase";


describe('camelCase', () => {

    it('joins words that are dash, space, and underscore separated', () => {
        const example = 'hello-something_derp asdf   ff';
        const result = 'helloSomethingDerpAsdfFf';

        expect(camelCase(example)).toBe(result);
    });

});