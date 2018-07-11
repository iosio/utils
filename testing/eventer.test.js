import {Eventer} from "../src/eventer";
import {typeOf} from "../src/type_checks";
import {isShape} from "../src/isShape";
// jest.fn();
// expect(console.error).toHaveBeenCalledTimes(2);


describe('Eventer', () => {




    it('should be a function', () => {
        expect(typeOf(Eventer)).toBe('function');
    });

    it('should return an object of shape', () => {
        const e = Eventer();

        let result = isShape(e, {
            on: {
                type: 'function',
                required: true,
            },
            off: {
                type: 'function',
                required: true
            },
            destroy: {
                type: 'function',
                required: true
            },
            emit: {
                type: 'function',
                required: true,
            }
        }).ok;

        expect(result).toBe(true);
    });


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




});