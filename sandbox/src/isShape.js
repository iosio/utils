import {
    isObject,
    objectIsEmpty,
    isString,
    isArray,
    isEmpty,
    typeOf,
    isUndefined,
    isInArray,
    isBoolean,
    isFunction,
    closeEnough,
    isNumber,
} from "../../dist";


export const type_map = {
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
    'one_of': 'one_of',
};


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
            errors.push('object to validate is empty..');
            ok = false;
        }
    }

    return {ok, errors};

};



export const isShape = (obj, schema, verbose, log) => {

    if (!log && verbose) {
        log = () => {
        };
        console.log('log formatter not provided');
    }
    let {ok, errors} = validate_args(obj, schema);

    let warnings = [];

    if (!ok) {
        verbose && log('args are not valid');
        return {ok, errors};
    }

    if (objectIsEmpty(schema)) {
        warnings.push('schema empty');
    }

    const anyCheck = (val, validate) => {
        verbose && log('any type passes');
    };

    let invalid = 'invalid value! ';

    const customCheck = (val, validate) => {
        if (validate.custom_validate && isFunction(validate.custom_validate)) {

            verbose && log('evaluating with custom evaluator');

            let cv_result = validate.custom_validate(val);

            if (!isBoolean(cv_result)) {
                warnings.push('custom validator should return a boolean value');
            } else {
                if (!cv_result) {
                    errors.push('value does not pass custom validation');
                }
            }

        } else {
            verbose && log('custom validator is invalid');
            errors.push(invalid + 'custom validator is invalid')
        }
    };

    const arrayCheck = (val, validate) => {
        if (isArray(val)) {
            if (validate.of && !isEmpty(validate.of)) {
                verbose && log('is array and has "of" object that is not empty');
                inspect(val, validate.of);
            }
        } else {
            errors.push(invalid + `expected array`);
        }

    };

    const objectCheck = (val, validate) => {
        if (isObject(val)) {
            if (validate.shape) {
                verbose && log('value is object and has shape');

                let results = validate_args(val, validate.shape);

                if (results.ok) {
                    verbose && log('passes arg validation.. inspecting object');
                    inspect(val, validate.shape);
                } else {
                    verbose && log('does not pass arg validation. will not inspect again')
                    errors.concat(results.errors);
                }
            }
        } else {
            errors.push(invalid + 'expected object');
        }
    };

    const allOtherCheck = (val, validate) => {
        let type = validate.type.toLowerCase();
        if (typeOf(val) === type) {
            verbose && log('all other check passed')
        } else {
            errors.push(invalid + `expected ${type}`);
        }
    };

    const oneOfCheck = (val, validate) => {
        if (isArray(validate.one_of)) {
            if (isInArray(val, validate.one_of)) {
                verbose && log('value found in array');
            } else {
                errors.push(invalid + 'did not find match in array');
            }
        } else {
            verbose && log('must provide an array to one_of prop');
            errors.push('must provide an array to one_of prop')
        }

    };

    const numberCheck = (val, validate) => {

        const isBetween = (num, min, max) => (num > min) && (num < max);

        const {min, max, close_to} = validate;

        let valid_min = false;
        let valid_max = false;


        if (isNumber(val)) {

            if (!isUndefined(close_to)) {
                if (isObject(close_to)) {
                    if (isNumber(close_to.target) && isNumber(close_to.variance)) {
                        if (closeEnough(val, close_to.target, close_to.variance)) {
                            verbose && log('number is close enough');
                        } else {
                            errors.push(`${val} is not close to: ${close_to.target}`);
                        }
                    } else {
                        errors.push('close_to requires object: {target: number, variance: number}');
                    }
                } else {
                    errors.push('close_to requires object: {target: number, variance: number}');
                }

            } else {

                if (!isUndefined(min)) {
                    if (isNumber(min)) {
                        valid_min = true;
                    } else {
                        errors.push('min prop requires type number');
                    }
                }

                if (!isUndefined(max)) {
                    if (isNumber(max)) {
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


    const evaluate = (val, validate) => {

        verbose && log('evaluating value: ');
        verbose && log(val);
        verbose && log('with this validator: ');
        verbose && log(validate);

        if (isUndefined(val) && validate.type.toLowerCase() !== 'undefined') {

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
                erros.push('value for type prop is invalid')
            }

        }

    };


    const inspect = (arr_or_obj, against) => {

        verbose && log('inspecting');

        if (isObject(arr_or_obj)) {
            verbose && log('inspecting object');
            for (let schema_key in against) {
                let validate = against[schema_key];
                let obj_val = arr_or_obj[schema_key];
                evaluate(obj_val, validate);
            }
        }
        if (isArray(arr_or_obj)) {
            verbose && log('inspecting array');
            for (let i = 0; i < arr_or_obj.length; i++) {
                evaluate(arr_or_obj[i], against);
            }
        }

    };

    inspect(obj, schema);

    if (errors.length > 0) {
        ok = false;
    }


    return {ok, errors, warnings};
};



export const objectOf = (evaluate, schema) =>{

    if(isObject(evaluate) && isObject(schema) && schema.type){
        let pass = true;

        Object.keys(evaluate).forEach((key)=>{

            if(typeOf(evaluate[key]) === schema.type){
                if(isObject(schema.shape)){
                    console.log('is object', evaluate[key], schema.shape)

                    let results = isShape(evaluate[key], schema.shape);

                    if(!results.ok){
                        pass = false;
                    }
                }

            }else{
                pass = false;
            }
        });

        return pass;
    }else{
        return false;
    }

};

export const arrayOf = (evaluate, schema) => {
    if(isArray(evaluate) && isObject(schema) && schema.type){
        let pass = true;
        evaluate.forEach((key)=>{

            if(typeOf(key) === schema.type){
                if(isObject(schema.shape)){
                    let results = isShape(key, schema.shape);
                    if(!results.ok){
                        pass = false;
                    }
                }

            }else{
                pass = false;
            }
        });

        return pass;
    }else{
        return false;
    }
};

