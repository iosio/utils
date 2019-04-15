import {typeOf} from "../src/typeOf";



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
    'undefined': (val)=>typeOf(val) === 'undefined',
    'null': (val)=>typeOf(val)=== 'null',
    'object': (val)=> typeOf(val) === 'object',
    'array': (val) => typeOf(val) === 'array',
    'string': (val)=> typeOf(val) === 'string',
    'function': (val)=> typeOf(val) === 'function',
    'regexp': (val)=> typeOf(val) === 'regexp',
    'date': (val)=>typeOf(val) === 'date',
    'boolean': (val)=>typeOf(val)=== 'boolean',
    'number': (val)=>typeOf(val) === 'number',
};


other_types.forEach((type) => {

    describe(`${type} tests`, () => {


        describe(`Should be ${type}`, () => {

            other_type_lists[type + 's'].forEach((thing) => {

                it(`${thing} should be type ${type}`, () => {

                    expect(other_type_funcs[type](thing)).toBe(true);

                });


            });

        });


    });
});

describe('isNaN test', () => {

    expect(typeOf(NaN) === 'nan').toBe(true);

    const derp = 'asdf';

    const not_a_number = 300 * derp;

    expect(typeOf(not_a_number) === 'nan').toBe(true);

});