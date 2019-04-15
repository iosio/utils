import {classNames} from "../src/classNames";



describe('classNames', () => {

    it('joins variable string arguments together into a space separated string', () => {

        const className1 = 'container';
        const className2 = 'primary';
        const className3 = 'max-width';

        expect(classNames(className1, className2, className3)).toBe('container primary max-width');
    });

});