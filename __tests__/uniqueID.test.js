import {uniqueID} from "../src/uniqueID";

describe('uniqueID', () => {

    it('should generate a unique id', () => {

        const uniques = [];

        let pass = true;
        for (let i = 0; i < 100; i++) {

            let uid = uniqueID();

            if(!uniques.includes(uid)){
                uniques.push(uid);
            }else{
                pass = false;
                break;
            }

        }

        expect(pass).toEqual(true);
    })

});