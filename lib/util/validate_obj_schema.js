(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./type_checks", "./empty_checks", "./has_checks"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./type_checks"), require("./empty_checks"), require("./has_checks"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.type_checks, global.empty_checks, global.has_checks);
        global.validate_obj_schema = mod.exports;
    }
})(this, function (_type_checks, _empty_checks, _has_checks) {
    "use strict";

    var validate_me = {
        event: 'request_test',
        type: 'request',
        response_id: 'unique_id',
        data: {
            obj: { derp: 'hello' },
            arr: [{ some: 'data' }, { some: 'more data' }]
        }

    };

    var objSchema = {
        event: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
            required: true
        },
        response_id: {
            type: 'string',
            required: true
        },
        data: {
            type: 'object',
            required: true,
            shape: {
                obj: { type: 'object', requred: true },
                arr: { type: 'array', required: true }
            }
        }
    };

    var objIsShape = function objIsShape(obj, shape) {

        if (!(0, _type_checks.isObject)(obj)) {
            return { ok: false, errors: errors };
        }
    };

    console.log('working');
});