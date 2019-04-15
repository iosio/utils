/**
 * lighter Object.assign stand in
 * @param {Object} obj - object to merge to
 * @param {Object} props - object to assign
 * @returns {Object} - the new object
 */
export function assign(obj, props){
    for(let i in props) obj[i] = props[i];
    return obj;
}