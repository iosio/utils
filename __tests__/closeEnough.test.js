
import {closeEnough} from "../src/closeEnough";

describe('closeEnough', () => {

    const varying_number = 15;
    const should_be_close_to = 20;



    it('should check true that number is close to value given the threshold', () => {

        const threshold = 10;
        expect(closeEnough(varying_number, should_be_close_to, threshold))
            .toEqual(true)

    });


    it('should check false that number is close to value given the threshold', () => {

        const threshold = 4;

        expect(closeEnough(varying_number, should_be_close_to, threshold))
            .toEqual(false)

    });


});
