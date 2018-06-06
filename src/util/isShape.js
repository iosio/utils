import {
    isObject,
    isArray,
    typeOf,
    isUndefined
} from "./type_checks";
import {objectIsEmpty} from "./empty_checks";

const validate_args = (obj_to_validate, schema) => {
    let errors = [];
    let ok = true;

    if (!obj_to_validate) {
        ok = false;
        errors.push('no object to validate')
    }

    if (!schema) {
        ok = false;
        errors.push('no schema to validate object against')
    }

    if (!isObject(obj_to_validate)) {
        errors.push('subject to validate must be an object');
        ok = false;
    }

    if (!isObject(schema)) {
        errors.push('schema to validate object against is not an object');
        ok = false;
    }

    if (isObject(obj_to_validate) && isObject(schema)) {

        let obj_val_empty = objectIsEmpty(obj_to_validate);
        let schema_empty = objectIsEmpty(schema);

        if (!schema_empty && obj_val_empty) {
            errors.push('object to validate is empty');
            ok = false;
        }
    }

    return {ok, errors};

};

export const isShape = (obj, schema) => {

    let {ok, errors} = validate_args(obj, schema);
    if (!ok) {
        return {ok, errors};
    }

    if (objectIsEmpty(schema)) {
        errors.push('schema empty');
    }
    const evaluate = (val, validate) => {

        if (isUndefined(val) && validate.type.toLowerCase() !== 'undefined') {
            if (validate.required) {
                errors.push('required property does not exist ');
            }
        } else if (validate.type) {

            if (validate.type.toLowerCase() === 'custom') {

                if (!validate.custom_validate(val)) {
                    errors.push('value does not pass custom validation');
                }

            } else {

                if (typeOf(val) !== validate.type.toLowerCase()) {
                    errors.push(`invalid property type`);
                } else {

                    if (isObject(val) && validate.shape) {

                        let results = validate_args(val, validate.shape);
                        if (results.ok) {
                            inspect(val, validate.shape);
                        } else {
                            errors.concat(results.errors);
                        }

                    } else if (isArray(val) && validate.of && !isEmpty(validate.of)) {
                        inspect(val, validate.of);

                    }
                }
            }
        }
    };

    const inspect = (arr_or_obj, against) => {

        if (isObject(arr_or_obj)) {

            for (let schema_key in against) {

                let validate = against[schema_key];
                let obj_val = arr_or_obj[schema_key];

                evaluate(obj_val, validate);
            }
        }


        if (isArray(arr_or_obj)) {

            for (let i = 0; i < arr_or_obj.length; i++) {

                evaluate(arr_or_obj[i], against);
            }
        }

    };//end inspect

    inspect(obj, schema);


    if (errors.length > 0) {
        ok = false;
    }

    return {ok, errors};

};
