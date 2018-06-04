import {isObject} from "./type_checks";
import {objectIsEmpty} from "./empty_checks";
import {objectHasProp} from "./has_checks";

const validate_me = {
    event: 'request_test',
    type: 'request',
    response_id: 'unique_id',
    data: {
        obj: {derp: 'hello'},
        arr: [{some: 'data'}, {some: 'more data'}]
    }

};


const objSchema = {
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
            obj: {type: 'object', requred: true},
            arr: {type: 'array', required: true}
        }
    }
};


const objIsShape = (obj, shape) => {

    if (!isObject(obj)) {
        return {ok: false, errors}
    }



};

console.log('working')