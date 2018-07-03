
import {idgen, uniqueID} from "../src/number_generation";
import {isInArray} from "../src/has_checks";

describe('number_generation', () => {

    describe('idgen', () => {

        it('should increment a number', () => {

            expect(idgen()).toEqual(0);
            expect(idgen()).toEqual(1);
            expect(idgen()).toEqual(2);
        })

    });


    describe('uniqueID', () => {



        it('should generate a unique id', () => {

            const uniques = [];

            let pass = true;
            for (let i = 0; i < 100; i++) {

                let uid = uniqueID();

                if(!isInArray(uid, uniques)){
                    uniques.push(uid);
                }else{
                    pass = false;
                    break;
                }

            }

            expect(pass).toEqual(true);
        })

    });


});