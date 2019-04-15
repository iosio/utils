import {textReplacer} from "../src/textReplacer";

describe('textReplacer', () => {

    it('should capitalize first letter of every word', () => {

        const kabobCase = 'pickles_and_dog_food';

        const expected = 'pickles and dog food';

        expect(textReplacer(kabobCase, [{string: '_', with: ' '}])).toBe(expected);
    });

});