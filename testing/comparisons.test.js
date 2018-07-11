import {objEquivalent_deep, closeEnough} from "../src/comparisons";




const objA = {
    a: 'asdf',
    b: 123,
    c: ['asdf', 'derp']
};

const objB = {
    a: 'asdf',
    b: 123,
    c: ['asdf', 'derp']
};

const objC = {
    a: 'asdf',
    b: true,
    c: ['asdf', 'derp']
};


describe('comparisons', () => {

    describe('objEquivalent_deep', () => {

        it('should return true for equivalence', () => {

            expect(objEquivalent_deep(objA, objB)).toEqual(true)

        });


        it('should return false for equivalence', () => {

            expect(objEquivalent_deep(objA, objC)).toEqual(false)

        });


    });



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




});
