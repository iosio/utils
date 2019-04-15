import {Eventer} from "../src/eventer";



describe('Eventer', () => {


    it('"on" should store an event handler. "off" should remove it', () => {
        const store = {};
        const e = Eventer(store);

        const test_cb = () => {
        };

        e.on('test', test_cb);

        expect(store['test'][0].name).toBe('test_cb');

        e.off('test',test_cb);

        expect(store['test'][0]).not.toBeDefined()

    });


    it('emit should work as expected', ()=>{
        const store = {};
        const e = Eventer(store);

        const test_cb = jest.fn();

        e.on('test', test_cb);

        e.on('test_value', (value)=>{
            test_cb();
            expect(value).toBe('abc');
        });

        e.emit('test_value', 'abc');

        e.emit('test');

        e.off('test',test_cb);

        e.emit('test');

        expect(test_cb).toHaveBeenCalledTimes(2);

    });

    it('destroy should remove key from store', ()=>{

        const store = {};
        const e = Eventer(store);

        const test_cb = jest.fn();

        e.on('test', test_cb);

        e.emit('test');

        e.destroy('test');

        expect(store.test).not.toBeDefined();

        e.emit('test');

        expect(test_cb).toHaveBeenCalledTimes(1);

    });


    it('Eventer should work with out provided store', ()=>{

        const e = Eventer();

        const test_cb = jest.fn();

        e.on('test', test_cb);
        e.emit('test');
        e.off('test',test_cb);
        e.emit('test');

        e.on('test_value', (value)=>{
            expect(value).toBe('abc');
            test_cb();
        });

        e.emit('test_value', 'abc');

        e.destroy('test_value');
        e.emit('test_value', 'abc');

        expect(test_cb).toHaveBeenCalledTimes(2);


    });

    it('.once should call the handler once and only once per callee', ()=>{

        const e = Eventer();

        const test_cb = jest.fn();

        e.once('test', test_cb);

        e.emit('test');
        e.emit('test');
        e.emit('test');

        expect(test_cb).toHaveBeenCalledTimes(1);

    })




});