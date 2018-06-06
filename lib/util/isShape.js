(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "./type_checks", "./empty_checks"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./type_checks"), require("./empty_checks"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.type_checks, global.empty_checks);
        global.isShape = mod.exports;
    }
})(this, function (exports, _type_checks, _empty_checks) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isShape = undefined;


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
                errors.push('object to validate is empty');
                ok = false;
            }
        }

        return { ok: ok, errors: errors };
    };

    var isShape = exports.isShape = function isShape(obj, schema) {
        var _validate_args = validate_args(obj, schema),
            ok = _validate_args.ok,
            errors = _validate_args.errors;

        if (!ok) {
            return { ok: ok, errors: errors };
        }

        if ((0, _empty_checks.objectIsEmpty)(schema)) {
            errors.push('schema empty');
        }
        var evaluate = function evaluate(val, validate) {

            if ((0, _type_checks.isUndefined)(val) && validate.type.toLowerCase() !== 'undefined') {
                if (validate.required) {
                    errors.push('required property does not exist ');
                }
            } else if (validate.type) {

                if (validate.type.toLowerCase() === 'custom') {

                    if (!validate.custom_validate(val)) {
                        errors.push('value does not pass custom validation');
                    }
                } else {

                    if ((0, _type_checks.typeOf)(val) !== validate.type.toLowerCase()) {
                        errors.push("invalid property type");
                    } else {

                        if ((0, _type_checks.isObject)(val) && validate.shape) {

                            var results = validate_args(val, validate.shape);
                            if (results.ok) {
                                inspect(val, validate.shape);
                            } else {
                                errors.concat(results.errors);
                            }
                        } else if ((0, _type_checks.isArray)(val) && validate.of && !isEmpty(validate.of)) {
                            inspect(val, validate.of);
                        }
                    }
                }
            }
        };

        var inspect = function inspect(arr_or_obj, against) {

            if ((0, _type_checks.isObject)(arr_or_obj)) {

                for (var schema_key in against) {

                    var validate = against[schema_key];
                    var obj_val = arr_or_obj[schema_key];

                    evaluate(obj_val, validate);
                }
            }

            if ((0, _type_checks.isArray)(arr_or_obj)) {

                for (var i = 0; i < arr_or_obj.length; i++) {

                    evaluate(arr_or_obj[i], against);
                }
            }
        }; //end inspect

        inspect(obj, schema);

        if (errors.length > 0) {
            ok = false;
        }

        return { ok: ok, errors: errors };
    };
});