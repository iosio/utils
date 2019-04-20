import {Subscription} from "../src/subscription";

describe('Subscription', () => {

    const sub = Subscription();


    it('should notify subscribed listeners, and unsubscribing should not be called', () => {

        const cb = jest.fn();
        const cb2 = jest.fn();
        const expected = 'hello';



        const unsubscribe1 = sub.subscribe((data) => {
            cb(data)
        });

        const unsubscribe2 = sub.subscribe((data)=>{
            cb2(data)
        });

        sub.notify(expected);

        expect(cb).toBeCalledWith(expected);
        expect(cb2).toBeCalledWith(expected);

        unsubscribe1();

        sub.notify(expected);

        expect(cb).toBeCalledTimes(1);
        expect(cb2).toBeCalledTimes(2)

        unsubscribe2();


        sub.notify(expected);

        expect(cb).toBeCalledTimes(1);
        expect(cb2).toBeCalledTimes(2)

    });


});