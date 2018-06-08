(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './isShape', '../../dist'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./isShape'), require('../../dist'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.isShape, global.dist);
        global.index = mod.exports;
    }
})(this, function (exports, _isShape3, _dist) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.tester = exports.log = undefined;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var log_this = '';
    var log = exports.log = function log(it) {
        var val = void 0;
        if (!(0, _dist.isString)(it)) {
            val = JSON.stringify(it, null, 4);
        } else {
            val = it;
        }
        log_this = '\n' + log_this + '\n' + val + '\n';
    };

    // --------------- test objects ----------------

    var number_obj = {
        num_zero: 0,
        num_pos1: 1,
        num_pos: 100,
        num_neg: -3,

        num_between: 5,
        num_greater: 5,
        num_less: 5,
        num_close_to: 5
    };

    var one_of_obj = {
        one_of: '123'
    };

    var any_obj = {
        any: 'asdf'
    };

    var undefined_obj = {
        not_defined: undefined
    };

    var null_obj = {
        nully: null
    };

    var nan_obj = {
        num_not: NaN
    };

    var regexp_obj = {
        regexp: /ab+c/
    };

    var boolean_obj = {
        bool_false: false,
        bool_true: true
    };

    var date_obj = {
        date: new Date()
    };

    var string_obj = {
        string: 'stringy',
        string_empty: ''
    };

    var function_obj = {
        func_anonymous: function func_anonymous(asdf) {
            console.log('derp');
        },
        func_named: function func_named() {
            console.log('i am a named func');
        }
    };

    var array_obj = {
        array_empty: [],
        array_of_strings: ['a', 'b', 'c', 'd']

    };

    var object_obj = {
        object_empty: {},
        object_simple: { hello: 'world' },
        object_nested: {
            obj: { derp: 'hello' },
            arr: [{ some: 'data', derp: [] }, { some: 'more data', derp: [] }]
        }

    };

    var custom_obj = {
        custom: 'abc'
    };

    var all_obj_map = {
        number_obj: number_obj,
        one_of_obj: one_of_obj,
        any_obj: any_obj,
        undefined_obj: undefined_obj,
        null_obj: null_obj,
        nan_obj: nan_obj,
        regexp_obj: regexp_obj,
        boolean_obj: boolean_obj,
        date_obj: date_obj,
        string_obj: string_obj,
        function_obj: function_obj,
        array_obj: array_obj,
        object_obj: object_obj,
        custom_obj: custom_obj
    };

    var all_obj = Object.assign({}, number_obj, one_of_obj, any_obj, undefined_obj, null_obj, nan_obj, regexp_obj, boolean_obj, date_obj, string_obj, function_obj, array_obj, object_obj, custom_obj);

    //------------------- test schemas ------------


    var one_of_schema = {
        one_of: {
            type: 'one_of',
            required: true,
            one_of: ['123', 'abc', 'xyz']
        }
    };

    var any_schema = {
        any: {
            type: 'any',
            required: true
        }
    };

    var undefined_schema = {
        not_defined: {
            type: 'undefined',
            required: true
        }
    };

    var null_schema = {
        nully: {
            type: 'null',
            required: true
        }
    };

    var nan_schema = {
        num_not: {
            type: 'nan',
            required: true
        }
    };

    var number_schema = {
        num_zero: {
            type: 'number',
            required: true
        },
        num_pos1: {
            type: 'number',
            required: true
        },
        num_pos: {
            type: 'number',
            required: true
        },
        num_neg: {
            type: 'number',
            required: true
        },

        num_between: {
            type: 'number',
            min: 1,
            max: 10,
            required: true
        },
        num_greater: {
            type: 'number',
            min: 1,
            required: true
        },
        num_less: {
            type: 'number',
            max: 6,
            required: true
        },
        num_close_to: {
            type: 'number',
            close_to: { target: 5, variance: 10 },
            required: true
        }
    };

    var regexp_schema = {
        regexp: {
            type: 'regexp',
            required: true
        }
    };

    var boolean_schema = {
        bool_false: {
            type: 'boolean',
            required: true
        },
        bool_true: {
            type: 'boolean',
            required: true
        }
    };

    var date_schema = {
        date: {
            type: 'date',
            required: true
        }
    };

    var string_schema = {
        string: {
            type: 'string',
            required: true
        },
        string_empty: {
            type: 'string',
            required: true
        }
    };

    var function_schema = {
        func_anonymous: {
            type: 'function',
            required: true
        },
        func_named: {
            type: 'function',
            required: true
        }
    };

    var array_schema = {
        array_empty: {
            type: 'array',
            required: true
        },
        array_of_strings: {
            type: 'array',
            required: true,
            of: { type: 'string' }
        }
    };

    var object_schema = {
        object_empty: {
            type: 'object',
            required: true
        },
        object_simple: {
            type: 'object',
            shape: {
                hello: { type: 'string', required: true }
            }
        },
        object_nested: {
            type: 'object',
            required: true,
            shape: {
                obj: { type: 'object', required: true },
                arr: {
                    type: 'array',
                    required: true,
                    of: { type: 'object', shape: { some: { type: 'string' }, derp: { type: 'array' } } }
                }
            }
        }
    };

    function custom(val) {
        return val === 'abc';
    }

    var custom_schema = {
        custom: function custom(val) {
            return val === 'abc';
        }
    };

    var custom_schema_print = {
        custom: custom.toString()
    };

    var all_schema_map = {
        one_of_schema: one_of_schema,
        any_schema: any_schema,
        undefined_schema: undefined_schema,
        null_schema: null_schema,
        nan_schema: nan_schema,
        number_schema: number_schema,
        regexp_schema: regexp_schema,
        boolean_schema: boolean_schema,
        date_schema: date_schema,
        string_schema: string_schema,
        function_schema: function_schema,
        array_schema: array_schema,
        object_schema: object_schema,
        custom_schema: custom_schema
    };

    var all_schema = Object.assign({}, custom_schema, one_of_schema, any_schema, undefined_schema, null_schema, nan_schema, number_schema, regexp_schema, boolean_schema, date_schema, string_schema, function_schema, array_schema, object_schema);
    var all_schema_print = Object.assign({}, one_of_schema, any_schema, undefined_schema, null_schema, nan_schema, number_schema, regexp_schema, boolean_schema, date_schema, string_schema, function_schema, array_schema, object_schema, custom_schema_print);

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


    var tester = exports.tester = function tester() {

        return new Promise(function (resolve, reject) {

            console.log('************************************************** \n\n\n\n\n ');

            var maps_valid = false;

            Object.keys(_isShape3.type_map).forEach(function (key) {
                // log(key);
            });

            var mapsValid = function mapsValid(verbose) {

                Object.keys(_isShape3.type_map).forEach(function (type) {
                    var obj_valid = !!all_obj_map[type + '_obj'];
                    var schema_valid = !!all_schema_map[type + '_schema'];
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

            var tests_valid = false;

            var check_each = function check_each(verbose) {

                Object.keys(_isShape3.type_map).forEach(function (type) {
                    var _isShape = (0, _isShape3.isShape)(all_obj_map[type + '_obj'], all_schema_map[type + '_schema'], verbose === 3, log),
                        ok = _isShape.ok,
                        errors = _isShape.errors,
                        warnings = _isShape.warnings;

                    if (verbose === 1 || verbose === 4) {
                        log(type + ' object passed: \n' + ok);
                    }
                    if (verbose === 2 || verbose === 4) {
                        log(type + ' object passed: \n' + ok);
                    }
                    if (!ok) {
                        log('type: ' + type + ' test did not pass');
                        log(errors);
                        log(warnings);
                    } else {
                        tests_valid = true;
                    }
                });

                log('each check pass: ' + tests_valid);
                return tests_valid;
            };

            var big_check_valid = false;

            var checkBigObject = function checkBigObject(verbose) {
                var _isShape2 = (0, _isShape3.isShape)(all_obj, all_schema, verbose === 3, log),
                    ok = _isShape2.ok,
                    errors = _isShape2.errors,
                    warnings = _isShape2.warnings;

                if (ok) {
                    big_check_valid = true;
                } else {
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

            // log(JSON.stringify(all_schema_print,null, 4))


            console.log((0, _isShape3.objectOf)(_defineProperty({ a: '123' }, 'a', 'asdf'), { type: 'string' }));

            console.log(log_this);

            resolve();
        });
    };
});