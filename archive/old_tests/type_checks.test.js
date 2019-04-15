import {isNaN} from "../../src/typeOf";
import {
    isUndefined,
    isNull,
    isObject,
    isArray,
    isString,
    isFunction,
    isRegexp,
    isDate,
    isBoolean,
    isNumber,
    isTruthy,
} from "../old_src/type_checks";

const base = {


    nan: NaN,

    undefined: undefined,


    null: null,

    number: 1,
    number_zero: 0,
    number_negative: -1,


    object: {a: 0, b: 1, c: 2},
    object_empty: {},


    array: ['a', 'b', 'c'],
    array_empty: [],

    string: 'string_with_value',
    string_empty: '',

    function: () => {
    },

    regexp: /ab+c/,
    date: new Date(),

    boolean_true: true,
    boolean_false: false

};

const a = 'a';
const obj = {};

const undefineds = [
    undefined,
    obj.nothing,
];

const nulls = [
    null
];


const objects = [
    {},
    {a: 0, b: 1, c: 2}
];

const arrays = [
    [],
    ['a', 'b', 'c']
];

const strings = [
    '',
    'asfd',
    `${a}`
];

const functions = [
    () => {
    },
    function fn() {
    },
];

const regexps = [
    /ab+c/
];

const dates = [
    new Date()
];

const booleans = [
    true,
    false
];


// exclude numbers
// exclude the follow because the value coerces to a number when calling Number(<value>)
// null === 0
// [] === 0
// '' === 0
// new Date() ==== 1530320965338
// true === 1
// false === 0

const nans = [
    NaN,
    ...undefineds,
    ...objects,
    ['asdf'],
    'asdf',
    ...functions,
    ...regexps,
];

const for_sure_nans = [
    ...nans,
    null,
    [],
    '',
    new Date(),
    true,
    false,
];

const numbers = [
    -1,
    0,
    1,
    Infinity,
];

const truthies = [
    ...objects,
    ...arrays,
    ...regexps,
    ...dates,
    ...functions,
    true,
    1,
    Infinity,
];

const falsies = [
    ...undefineds,
    ...nulls,
    0,
    false,
];


const other_type_lists = {
    undefineds,
    nulls,
    objects,
    arrays,
    strings,
    functions,
    regexps,
    dates,
    booleans,
    numbers
};

const other_types = [
    'undefined',
    'null',
    'object',
    'array',
    'string',
    'function',
    'regexp',
    'date',
    'boolean',
    'number'
];

const other_type_funcs = {
    'undefined': isUndefined,
    'null': isNull,
    'object': isObject,
    'array': isArray,
    'string': isString,
    'function': isFunction,
    'regexp': isRegexp,
    'date': isDate,
    'boolean': isBoolean,
    'number': isNumber,
};


// console.log(nans)

describe('type_checks', () => {

    other_types.forEach((type) => {

        describe(`${type} tests`, () => {


            describe(`Should be ${type}`, () => {

                other_type_lists[type + 's'].forEach((thing) => {

                    it(`${thing} should be type ${type}`, () => {

                        expect(other_type_funcs[type](thing)).toBe(true);

                    });


                });

            });

            describe(`Should not be ${type}`, () => {

                Object.keys(base).forEach((key) => {

                    let value = base[key];

                    if (!key.includes(type)) {

                        it(`${value} should not be type ${type}`, () => {

                            expect(other_type_funcs[type](value)).toBe(false);

                        });
                    }


                })

            });


        });
    });


    describe('isNaN tests', () => {

        describe('should be NaNs', () => {

            nans.forEach((thing) => {
                it(`${thing} is NaN`, () => {

                    expect(isNaN(thing)).toBe(true);
                });
            });

        });

        describe('should not be NaNs', () => {

            numbers.forEach((thing) => {
                it(`${thing} is not NaN`, () => {

                    expect(isNaN(thing)).toBe(false);
                });
            });
        })


    });

    describe('isNaN tests', () => {

        describe('should be NaN', () => {

            nans.forEach((thing) => {
                it(`${thing} is NaN`, () => {

                    expect(isNaN(thing)).toBe(true);
                });
            });

        });

        describe('should not be NaN', () => {

            numbers.forEach((thing) => {
                it(`${thing} is not NaN`, () => {

                    expect(isNaN(thing)).toBe(false);
                });

            });

        });


    });


    describe(`isTruth tests`, () => {

        describe(`should be truthy`, () => {
            truthies.forEach((thing) => {

                it(`${thing} should be truthy`, () => {

                    expect(isTruthy(thing)).toBe(true);

                });


            });

        });

        describe(`should not be truthy`, () => {

            falsies.forEach((thing) => {

                it(`${thing} should be truthy`, () => {

                    expect(isTruthy(thing)).toBe(false);

                });


            });

        });

    });


})
;

