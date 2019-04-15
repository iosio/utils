import {getUnixTimeStampNow} from "../src/getUnixTimeStampNow";

describe('getUnixTimeStampNow', () => {

    it('should return a number', ()=>{
        expect(typeof getUnixTimeStampNow() === 'number').toBe(true);
    })

});