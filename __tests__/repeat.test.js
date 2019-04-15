import {repeat} from "../src/repeat";

describe('repeat', ()=>{
    it('should repeat a function x times',()=>{

        const test_cb = jest.fn();

        repeat(3)(test_cb);

        expect(test_cb).toHaveBeenCalledTimes(3);

    })
});