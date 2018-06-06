import {type_map, isShape} from './isShape'
import {isString} from "../../dist";

let  log_this = '';
export const log = (it) => {
    let val;
    if (!isString(it)) {
        val = JSON.stringify(it, null, 4);
    } else {
        val = it;
    }
    log_this = '\n' + log_this + '\n' + val + '\n';
};

// --------------- test objects ----------------

const number_obj = {
    num_zero: 0,
    num_pos1: 1,
    num_pos: 100,
    num_neg: -3,

    num_between: 5,
    num_greater: 5,
    num_less: 5,
    num_close_to: 5,
};


const one_of_obj = {
    one_of: '123',
};

const any_obj = {
    any: 'asdf',
};

const undefined_obj = {
    not_defined: undefined,
};


const null_obj = {
    nully: null,
};

const nan_obj = {
    num_not: NaN,
};


const regexp_obj = {
    regexp: /ab+c/,
};

const boolean_obj = {
    bool_false: false,
    bool_true: true,
};

const date_obj = {
    date: new Date()
};

const string_obj = {
    string: 'stringy',
    string_empty: '',
};


const function_obj = {
    func_anonymous: (asdf) => {
        console.log('derp')
    },
    func_named: function func_named() {
        console.log('i am a named func');
    },
};

const array_obj = {
    array_empty: [],
    array_of_strings: ['a', 'b', 'c', 'd'],

};

const object_obj = {
    object_empty: {},
    object_simple: {hello: 'world'},
    object_nested: {
        obj: {derp: 'hello'},
        arr: [{some: 'data', derp: []}, {some: 'more data', derp: []}]
    },

};

const custom_obj = {
    custom: 'abc'
};

const all_obj_map = {
    number_obj,
    one_of_obj,
    any_obj,
    undefined_obj,
    null_obj,
    nan_obj,
    regexp_obj,
    boolean_obj,
    date_obj,
    string_obj,
    function_obj,
    array_obj,
    object_obj,
    custom_obj,
};

const all_obj = {
    ...number_obj,
    ...one_of_obj,
    ...any_obj,
    ...undefined_obj,
    ...null_obj,
    ...nan_obj,
    ...regexp_obj,
    ...boolean_obj,
    ...date_obj,
    ...string_obj,
    ...function_obj,
    ...array_obj,
    ...object_obj,
    ...custom_obj,
};

//------------------- test schemas ------------


const one_of_schema = {
    one_of: {
        type: 'one_of',
        required: true,
        one_of: ['123', 'abc', 'xyz']
    },
};

const any_schema = {
    any: {
        type: 'any',
        required: true,
    },
};

const undefined_schema = {
    not_defined: {
        type: 'undefined',
        required: true,
    },
};


const null_schema = {
    nully: {
        type: 'null',
        required: true,
    },
};

const nan_schema = {
    num_not: {
        type: 'nan',
        required: true,
    },
};

const number_schema = {
    num_zero: {
        type: 'number',
        required: true
    },
    num_pos1: {
        type: 'number',
        required: true,
    },
    num_pos: {
        type: 'number',
        required: true,
    },
    num_neg: {
        type: 'number',
        required: true,
    },


    num_between: {
        type: 'number',
        min: 1,
        max: 10,
        required: true,
    },
    num_greater: {
        type: 'number',
        min: 1,
        required: true,
    },
    num_less: {
        type: 'number',
        max: 6,
        required: true,
    },
    num_close_to: {
        type: 'number',
        close_to: {target: 5, variance: 10},
        required: true,
    },
};

const regexp_schema = {
    regexp: {
        type: 'regexp',
        required: true,
    },
};

const boolean_schema = {
    bool_false: {
        type: 'boolean',
        required: true,
    },
    bool_true: {
        type: 'boolean',
        required: true,
    },
};

const date_schema = {
    date: {
        type: 'date',
        required: true,
    },
};

const string_schema = {
    string: {
        type: 'string',
        required: true,
    },
    string_empty: {
        type: 'string',
        required: true,
    },
};

const function_schema = {
    func_anonymous: {
        type: 'function',
        required: true,
    },
    func_named: {
        type: 'function',
        required: true,
    }
};

const array_schema = {
    array_empty: {
        type: 'array',
        required: true
    },
    array_of_strings: {
        type: 'array',
        required: true,
        of: {type: 'string'}
    },
};

const object_schema = {
    object_empty: {
        type: 'object',
        required: true,
    },
    object_simple: {
        type: 'object',
        shape: {
            hello: {type: 'string', required: true}
        }
    },
    object_nested: {
        type: 'object',
        required: true,
        shape: {
            obj: {type: 'object', required: true},
            arr: {
                type: 'array',
                required: true,
                of: {type: 'object', shape: {some: {type: 'string'}, derp: {type: 'array'}}}
            }
        }
    },
};

const custom_schema = {
    custom: (val) => val === 'abc'
};

const all_schema_map = {
    one_of_schema,
    any_schema,
    undefined_schema,
    null_schema,
    nan_schema,
    number_schema,
    regexp_schema,
    boolean_schema,
    date_schema,
    string_schema,
    function_schema,
    array_schema,
    object_schema,
    custom_schema,
};

const all_schema = {
    ...one_of_schema,
    ...any_schema,
    ...undefined_schema,
    ...null_schema,
    ...nan_schema,
    ...number_schema,
    ...regexp_schema,
    ...boolean_schema,
    ...date_schema,
    ...string_schema,
    ...function_schema,
    ...array_schema,
    ...object_schema,
    ...custom_schema,
};


//
// const Is = function () {
//
//     this.check_it = undefined;
//     this.results = [];
//
//     this.log = (it) => {
//         let val;
//         if (!isString(it)) {
//             val = JSON.stringify(it, null, 4);
//         } else {
//             val = it;
//         }
//         log_this = '\n' + log_this + '\n' + val + '\n';
//     };
//
//     this.it = (val) => {
//         this.check_it = val;
//         return this;
//     };
//
//     this.shape = (schema) => {
//         isShape(this.check_it, schema);
//         return
//     };
//
//     this.func = (val) => {
//
//         return isFunction(val);
//     }
//
// };
//
// const is = new Is();


export const tester = () => {

    return new Promise((resolve, reject) => {


        console.log('************************************************** \n\n\n\n\n ');

        let maps_valid = false;

        const mapsValid = (verbose) => {

            Object.keys(type_map).forEach((type) => {
                let obj_valid = !!all_obj_map[type + '_obj'];
                let schema_valid = !!all_schema_map[type + '_schema'];
                if (verbose) {
                    log('type: ' + type + ' object exists: \n' + obj_valid);
                    log('type: ' + type + ' schema exists: \n' + schema_valid);
                }
                if (obj_valid && schema_valid) {
                    maps_valid = true;
                } else {
                    log('map type: ' + type + ' is invalid');
                }
            });
            log('maps valid: ' + maps_valid);
            return maps_valid;
        };



        let tests_valid = false;

        const check_each = (verbose) => {

            Object.keys(type_map).forEach((type) => {

                const {ok, errors, warnings} = isShape(all_obj_map[type + '_obj'], all_schema_map[type + '_schema'], verbose === 3, log);

                if (verbose === 1 || verbose === 4) {
                    log(type + ' object passed: \n' + ok);
                }
                if(verbose === 2 || verbose === 4){
                    log(type + ' object passed: \n' + ok);
                }
                if(!ok){
                    log('type: ' + type + ' test did not pass');
                    log(errors);
                    log(warnings);
                }else{
                    tests_valid = true;
                }
            });

            log('each check pass: ' + tests_valid);
            return tests_valid;
        };

        let big_check_valid = false;

        const checkBigObject = (verbose) => {
            const {ok, errors, warnings} = isShape(all_obj, all_schema, verbose === 3, log);


            if(ok){
                big_check_valid = true;
            }else{
                log(errors);
                log(warnings);
            }

            log('big check pass: ' + big_check_valid);
        };
        //
        // if(mapsValid()){
        //     if(check_each()){
        //         checkBigObject();
        //     }
        // }

        isShape(all_obj, all_schema, true);






        console.log(log_this);

        resolve()

    })
};























