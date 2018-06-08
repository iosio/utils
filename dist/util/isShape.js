(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "./type_checks", "./comparisons", "./has_checks", "./empty_checks"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./type_checks"), require("./comparisons"), require("./has_checks"), require("./empty_checks"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.type_checks, global.comparisons, global.has_checks, global.empty_checks);
        global.isShape = mod.exports;
    }
})(this, function (exports, _type_checks, _comparisons, _has_checks, _empty_checks) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.arrayOf = exports.objectOf = exports.isShape = exports.type_map = undefined;


    /**
     * for verifying correct usage
     * @type {{undefined: string, number: string, nan: string, null: string, regexp: string, boolean: string, date: string, string: string, function: string, array: string, object: string, any: string, custom: string, one_of: string}}
     */
    var type_map = exports.type_map = {
        'undefined': 'undefined',
        'number': 'number',
        'nan': 'nan',
        'null': 'null',
        'regexp': 'regexp',
        'boolean': 'boolean',
        'date': 'date',
        'string': 'string',
        'function': 'function',
        'array': 'array',
        'object': 'object',
        'any': 'any',
        'custom': 'custom',
        'one_of': 'one_of'
    };

    /**
     * validates that the correct arguments are passed to isShape
     * @param {object} obj_to_validate - object to validate
     * @param {object} schema - object to validate against
     * @returns {{ok: boolean, errors: Array}}
     */
    var validate_args = function validate_args(obj_to_validate, schema) {
        var errors = [];
        var ok = true;

        if (!obj_to_validate) {
            ok = false;
            errors.push('no object to validate');
        }

        if (!schema) {
            ok = false;
            errors.push('no schema to validate object against');
        }

        if (!(0, _type_checks.isObject)(obj_to_validate)) {
            errors.push('subject to validate must be an object');
            ok = false;
        }

        if (!(0, _type_checks.isObject)(schema)) {
            errors.push('schema to validate object against is not an object');
            ok = false;
        }

        if ((0, _type_checks.isObject)(obj_to_validate) && (0, _type_checks.isObject)(schema)) {

            var obj_val_empty = (0, _empty_checks.objectIsEmpty)(obj_to_validate);
            var schema_empty = (0, _empty_checks.objectIsEmpty)(schema);

            if (!schema_empty && obj_val_empty) {
                errors.push('object to validate is empty..');
                ok = false;
            }
        }

        return { ok: ok, errors: errors };
    };

    /**
     *  * object schema validator *
     * ----- example schema -----
    
     - required : if the object must have that property
    
    
     {
     "one_of": {
         "type": "one_of",   // value on this property should be an emum
         "required": true,
         "one_of": [         // required array for one_of
             "123",
             "abc",
             "xyz"
         ]
     },
     "any": {
         "type": "any",      // any type will pass
         "required": true
     },
     "not_defined": {
         "type": "undefined", // TODO - need to verify this one
         "required": true
     },
     "nully": {
         "type": "null",    //verifies it is type null
         "required": true
     },
     "num_not": {
         "type": "nan",      //verifies it is type NaN or not a number
         "required": true
     },
     "num_zero": {
         "type": "number",  //verifies it is type number (including 0 and negatives)
         "required": true
     },
     "num_pos1": {
         "type": "number",
         "required": true
     },
     "num_pos": {
         "type": "number",
         "required": true
     },
     "num_neg": {
         "type": "number",
         "required": true
     },
     "num_between": {       // verifies a number is between a min and max number value
         "type": "number",
         "min": 1,
         "max": 10,
         "required": true
     },
     "num_greater": {       // verifies it is greater than a minimum number value
         "type": "number",
         "min": 1,
         "required": true
     },
     "num_less": {          // verifies it is less than a maximum number value
         "type": "number",
         "max": 6,
         "required": true
     },
     "num_close_to": {      // verifies a number is within a range
         "type": "number",
         "close_to": {
             "target": 5,
             "variance": 10
         },
         "required": true
     },
     "regexp": {
         "type": "regexp",   // verifies it is type regexp
         "required": true
     },
     "bool_false": {
         "type": "boolean", // verifies it is type boolean
         "required": true
     },
     "bool_true": {
         "type": "boolean",
         "required": true
     },
     "date": {
         "type": "date",  // TODO: may need a custom validator for this
         "required": true
     },
     "string": {
         "type": "string", // verifies it is type string -- even empty string
         "required": true
     },
     "string_empty": {
         "type": "string",
         "required": true
     },
     "func_anonymous": {
         "type": "function", // verifies it is type function
         "required": true
     },
     "func_named": {
         "type": "function",
         "required": true
     },
     "array_empty": {
         "type": "array", // verifies it is type array
         "required": true
     },
     "array_of_strings": {
         "type": "array", // verifies it is type array of type. can pass shape to of prop
         "required": true,
         "of": {
             "type": "string"
         }
     },
     "object_empty": {
         "type": "object", // verifies it is type object. can assign definition to shape prop
         "required": true
     },
     "object_simple": {
         "type": "object",
         "shape": {
             "hello": {
                 "type": "string",
                 "required": true
             }
         }
     },
     "object_nested": {
         "type": "object",      // verifies deep nested objects as well
         "required": true,
         "shape": {
             "obj": {
                 "type": "object",
                 "required": true
             },
             "arr": {
                 "type": "array",
                 "required": true,
                 "of": {
                     "type": "object",
                     "shape": {
                         "some": {
                             "type": "string"
                         },
                         "derp": {
                             "type": "array"
                         }
                     }
                 }
             }
         }
     },
     "custom": function custom(val){     // custom validator function can be passed. must return boolean
        return val === "abc";
     }
    }
     ---------- example object to verify -----------
    
     {
        "num_zero": 0,
        "num_pos1": 1,
        "num_pos": 100,
        "num_neg": -3,
        "num_between": 5,
        "num_greater": 5,
        "num_less": 5,
        "num_close_to": 5,
        "one_of": "123",
        "any": "asdf",
        "nully": null,
        "num_not": null,
        "regexp": /ab+c/,
        "bool_false": false,
        "bool_true": true,
        "date": new Date(),
        "string": "stringy",
        "string_empty": "",
        "array_empty": [],
        "array_of_strings": [
            "a",
            "b",
            "c",
            "d"
        ],
        "object_empty": {},
        "object_simple": {
            "hello": "world"
        },
        "object_nested": {
            "obj": {
                "derp": "hello"
            },
            "arr": [
                {
                    "some": "data",
                    "derp": []
                },
                {
                    "some": "more data",
                    "derp": []
                }
            ]
        },
        "custom": "abc"
    }
    
    
     * @param {object} obj - object to validate
     * @param {object} schema - object to validate against
     * @param {boolean} verbose - true to console log validations
     * @param {function|boolean} log - function to stringify results
     * @returns {object} - {ok: boolean, errors: array, warnings: array}
     */
    var isShape = exports.isShape = function isShape(obj, schema, verbose, log) {

        if (!log && verbose) {
            log = function log() {
                return 'asdf';
            };
            console.log('log formatter not provided');
        }

        var _validate_args = validate_args(obj, schema),
            ok = _validate_args.ok,
            errors = _validate_args.errors;

        var warnings = [];

        if (!ok) {
            verbose && log('args are not valid');
            return { ok: ok, errors: errors };
        }

        if ((0, _empty_checks.objectIsEmpty)(schema)) {
            warnings.push('schema empty');
        }

        var anyCheck = function anyCheck(val, validate) {
            verbose && log('any type passes');
        };

        var invalid = 'invalid value! ';

        var customCheck = function customCheck(val, validate) {
            if (validate.custom_validate && (0, _type_checks.isFunction)(validate.custom_validate)) {

                verbose && log('evaluating with custom evaluator');

                var cv_result = validate.custom_validate(val);

                if (!(0, _type_checks.isBoolean)(cv_result)) {
                    warnings.push('custom validator should return a boolean value');
                } else {
                    if (!cv_result) {
                        errors.push('value does not pass custom validation');
                    }
                }
            } else {
                verbose && log('custom validator is invalid');
                errors.push(invalid + 'custom validator is invalid');
            }
        };

        var arrayCheck = function arrayCheck(val, validate) {
            if ((0, _type_checks.isArray)(val)) {
                if (validate.of && !(0, _empty_checks.isEmpty)(validate.of)) {
                    verbose && log('is array and has "of" object that is not empty');
                    inspect(val, validate.of);
                }
            } else {
                errors.push(invalid + "expected array");
            }
        };

        var objectCheck = function objectCheck(val, validate) {
            if ((0, _type_checks.isObject)(val)) {
                if (validate.shape) {
                    verbose && log('value is object and has shape');

                    var results = validate_args(val, validate.shape);

                    if (results.ok) {
                        verbose && log('passes arg validation.. inspecting object');
                        inspect(val, validate.shape);
                    } else {
                        verbose && log('does not pass arg validation. will not inspect again');
                        errors.concat(results.errors);
                    }
                }
            } else {
                errors.push(invalid + 'expected object');
            }
        };

        var allOtherCheck = function allOtherCheck(val, validate) {
            var type = validate.type.toLowerCase();
            if ((0, _type_checks.typeOf)(val) === type) {
                verbose && log('all other check passed');
            } else {
                errors.push(invalid + ("expected " + type));
            }
        };

        var oneOfCheck = function oneOfCheck(val, validate) {
            if ((0, _type_checks.isArray)(validate.one_of)) {
                if ((0, _has_checks.isInArray)(val, validate.one_of)) {
                    verbose && log('value found in array');
                } else {
                    errors.push(invalid + 'did not find match in array');
                }
            } else {
                verbose && log('must provide an array to one_of prop');
                errors.push('must provide an array to one_of prop');
            }
        };

        var numberCheck = function numberCheck(val, validate) {

            var isBetween = function isBetween(num, min, max) {
                return num > min && num < max;
            };

            var min = validate.min,
                max = validate.max,
                close_to = validate.close_to;


            var valid_min = false;
            var valid_max = false;

            if ((0, _type_checks.isNumber)(val)) {

                if (!(0, _type_checks.isUndefined)(close_to)) {
                    if ((0, _type_checks.isObject)(close_to)) {
                        if ((0, _type_checks.isNumber)(close_to.target) && (0, _type_checks.isNumber)(close_to.variance)) {
                            if ((0, _comparisons.closeEnough)(val, close_to.target, close_to.variance)) {
                                verbose && log('number is close enough');
                            } else {
                                errors.push(val + " is not close to: " + close_to.target);
                            }
                        } else {
                            errors.push('close_to requires object: {target: number, variance: number}');
                        }
                    } else {
                        errors.push('close_to requires object: {target: number, variance: number}');
                    }
                } else {

                    if (!(0, _type_checks.isUndefined)(min)) {
                        if ((0, _type_checks.isNumber)(min)) {
                            valid_min = true;
                        } else {
                            errors.push('min prop requires type number');
                        }
                    }

                    if (!(0, _type_checks.isUndefined)(max)) {
                        if ((0, _type_checks.isNumber)(max)) {
                            valid_max = true;
                        } else {
                            errors.push('max prop requires type number');
                        }
                    }

                    if (valid_min && valid_max) {
                        if (isBetween(val, min, max)) {
                            verbose && log('number is between min and max');
                        } else {
                            errors.push(invalid + 'number not between min and max');
                        }
                    } else if (valid_min) {
                        if (val > min) {
                            verbose && log('number is greater than min');
                        } else {
                            errors.push(invalid + 'number is not greater than min');
                        }
                    } else if (valid_max) {
                        if (val < max) {
                            verbose && log('number is less than max');
                        } else {
                            errors.push(invalid + 'number is not less than');
                        }
                    }
                }
            } else {
                errors.push(invalid + 'expected number');
            }
        };

        var evaluate = function evaluate(val, validate) {

            verbose && log('evaluating value: ');
            verbose && log(val);
            verbose && log('with this validator: ');
            verbose && log(validate);

            if ((0, _type_checks.isUndefined)(val) && validate.type.toLowerCase() !== 'undefined') {

                if (validate.required) {
                    verbose && log('missing value');
                    errors.push('missing required property');
                }
            } else if (validate.type) {

                if (type_map[validate.type]) {

                    verbose && log('has type validation and type is valid');

                    switch (validate.type.toLowerCase()) {
                        case 'any':
                            anyCheck(val, validate);
                            break;
                        case 'custom':
                            customCheck(val, validate);
                            break;
                        case 'array':
                            arrayCheck(val, validate);
                            break;
                        case 'object':
                            objectCheck(val, validate);
                            break;
                        case 'one_of':
                            oneOfCheck(val, validate);
                            break;
                        case 'number':
                            numberCheck(val, validate);
                            break;
                        default:
                            allOtherCheck(val, validate);
                            break;
                    }
                } else {
                    verbose && log('value for type prop is invalid');
                    erros.push('value for type prop is invalid');
                }
            }
        };

        var inspect = function inspect(arr_or_obj, against) {

            verbose && log('inspecting');

            if ((0, _type_checks.isObject)(arr_or_obj)) {
                verbose && log('inspecting object');
                for (var schema_key in against) {
                    var validate = against[schema_key];
                    var obj_val = arr_or_obj[schema_key];
                    evaluate(obj_val, validate);
                }
            }
            if ((0, _type_checks.isArray)(arr_or_obj)) {
                verbose && log('inspecting array');
                for (var i = 0; i < arr_or_obj.length; i++) {
                    evaluate(arr_or_obj[i], against);
                }
            }
        };

        inspect(obj, schema);

        if (errors.length > 0) {
            ok = false;
        }

        return { ok: ok, errors: errors, warnings: warnings };
    };

    var objectOf = exports.objectOf = function objectOf(evaluate, schema) {

        if ((0, _type_checks.isObject)(evaluate) && (0, _type_checks.isObject)(schema) && schema.type) {
            var pass = true;

            Object.keys(evaluate).forEach(function (key) {

                if ((0, _type_checks.typeOf)(evaluate[key]) === schema.type) {
                    if ((0, _type_checks.isObject)(schema.shape)) {
                        // console.log('is object', evaluate[key], schema.shape)

                        var results = isShape(evaluate[key], schema.shape);

                        if (!results.ok) {
                            pass = false;
                        }
                    }
                } else {
                    pass = false;
                }
            });

            return pass;
        } else {
            return false;
        }
    };

    var arrayOf = exports.arrayOf = function arrayOf(evaluate, schema) {
        if ((0, _type_checks.isArray)(evaluate) && (0, _type_checks.isObject)(schema) && schema.type) {
            var pass = true;
            evaluate.forEach(function (key) {

                if ((0, _type_checks.typeOf)(key) === schema.type) {
                    if ((0, _type_checks.isObject)(schema.shape)) {
                        var results = isShape(key, schema.shape);
                        if (!results.ok) {
                            pass = false;
                        }
                    }
                } else {
                    pass = false;
                }
            });

            return pass;
        } else {
            return false;
        }
    };
});