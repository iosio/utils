(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../../dist'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../../dist'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.dist);
        global.isShape = mod.exports;
    }
})(this, function (exports, _dist) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isShape = exports.type_map = undefined;
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

        if (!(0, _dist.isObject)(obj_to_validate)) {
            errors.push('subject to validate must be an object');
            ok = false;
        }

        if (!(0, _dist.isObject)(schema)) {
            errors.push('schema to validate object against is not an object');
            ok = false;
        }

        if ((0, _dist.isObject)(obj_to_validate) && (0, _dist.isObject)(schema)) {

            var obj_val_empty = (0, _dist.objectIsEmpty)(obj_to_validate);
            var schema_empty = (0, _dist.objectIsEmpty)(schema);

            if (!schema_empty && obj_val_empty) {
                errors.push('object to validate is empty..');
                ok = false;
            }
        }

        return { ok: ok, errors: errors };
    };

    var isShape = exports.isShape = function isShape(obj, schema, verbose, log) {

        if (!log && verbose) {
            log = function log() {};
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

        if ((0, _dist.objectIsEmpty)(schema)) {
            warnings.push('schema empty');
        }

        var anyCheck = function anyCheck(val, validate) {
            verbose && log('any type passes');
        };

        var invalid = 'invalid value! ';

        var customCheck = function customCheck(val, validate) {
            if (validate.custom_validate && (0, _dist.isFunction)(validate.custom_validate)) {

                verbose && log('evaluating with custom evaluator');

                var cv_result = validate.custom_validate(val);

                if (!(0, _dist.isBoolean)(cv_result)) {
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
            if ((0, _dist.isArray)(val)) {
                if (validate.of && !(0, _dist.isEmpty)(validate.of)) {
                    verbose && log('is array and has "of" object that is not empty');
                    inspect(val, validate.of);
                }
            } else {
                errors.push(invalid + 'expected array');
            }
        };

        var objectCheck = function objectCheck(val, validate) {
            if ((0, _dist.isObject)(val)) {
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
            if ((0, _dist.typeOf)(val) === type) {
                verbose && log('all other check passed');
            } else {
                errors.push(invalid + ('expected ' + type));
            }
        };

        var oneOfCheck = function oneOfCheck(val, validate) {
            if ((0, _dist.isArray)(validate.one_of)) {
                if ((0, _dist.isInArray)(val, validate.one_of)) {
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

            if ((0, _dist.isNumber)(val)) {

                if (!(0, _dist.isUndefined)(close_to)) {
                    if ((0, _dist.isObject)(close_to)) {
                        if ((0, _dist.isNumber)(close_to.target) && (0, _dist.isNumber)(close_to.variance)) {
                            if ((0, _dist.closeEnough)(val, close_to.target, close_to.variance)) {
                                verbose && log('number is close enough');
                            } else {
                                errors.push(val + ' is not close to: ' + close_to.target);
                            }
                        } else {
                            errors.push('close_to requires object: {target: number, variance: number}');
                        }
                    } else {
                        errors.push('close_to requires object: {target: number, variance: number}');
                    }
                } else {

                    if (!(0, _dist.isUndefined)(min)) {
                        if ((0, _dist.isNumber)(min)) {
                            valid_min = true;
                        } else {
                            errors.push('min prop requires type number');
                        }
                    }

                    if (!(0, _dist.isUndefined)(max)) {
                        if ((0, _dist.isNumber)(max)) {
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

            if ((0, _dist.isUndefined)(val) && validate.type.toLowerCase() !== 'undefined') {

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

            if ((0, _dist.isObject)(arr_or_obj)) {
                verbose && log('inspecting object');
                for (var schema_key in against) {
                    var validate = against[schema_key];
                    var obj_val = arr_or_obj[schema_key];
                    evaluate(obj_val, validate);
                }
            }
            if ((0, _dist.isArray)(arr_or_obj)) {
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
});