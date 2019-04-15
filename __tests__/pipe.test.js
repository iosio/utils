import {pipe} from "../src/pipe";

describe('pipe', () => {

    it('should call an array of functions, passing the result to the arguments of the next function', () => {

        const func1 = (val) => val + 1;
        const func2 = (val) => val + 1;
        const func3 = (val) => val + 1;

        const result = pipe([
            func1,
            func2,
            func3
        ], 1);

        expect(result).toBe(4);

    })
});
