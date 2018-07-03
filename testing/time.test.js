import {sortObjArrByDateTime} from "../src/time";
import moment from 'moment';

describe('time', () => {

    describe('sortObjArrByDateTime', () => {
        it('should sort the object array by date', () => {

            const time1 = moment().add({hours: 1}).format();
            const time2 = moment().add({hours: 2}).format();
            const time3 = moment().add({hours: 3}).format();


            const times = [
                {date: time3},
                {date: time1},
                {date: time2},
            ];

            const results = sortObjArrByDateTime(moment,times, 'date');

            expect(results[0]).toEqual(
                expect.objectContaining(
                    {date:time1}
                )
            );

            expect(results[1]).toEqual(
                expect.objectContaining(
                    {date:time2}
                )
            );

            expect(results[2]).toEqual(
                expect.objectContaining(
                    {date:time3}
                )
            )

        });



        it('should sort the object array by date in reverse order', () => {

            const time1 = moment().add({hours: 1}).format();
            const time2 = moment().add({hours: 2}).format();
            const time3 = moment().add({hours: 3}).format();


            const times = [
                {date: time3},
                {date: time1},
                {date: time2},
            ];

            const results = sortObjArrByDateTime(moment,times, 'date', true);

            expect(results[0]).toEqual(
                expect.objectContaining(
                    {date:time3}
                )
            );

            expect(results[1]).toEqual(
                expect.objectContaining(
                    {date:time2}
                )
            );

            expect(results[2]).toEqual(
                expect.objectContaining(
                    {date:time1}
                )
            )

        });

    });

});

