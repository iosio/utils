import {capitalize} from "./capitialize";
import {textReplacer} from "./textReplacer";

const replacements1 = [
    {string: '_', with: ' '},
    {string: '.', with: ' '},
    {string: '-', with: ' '},
];
export const camelCase = (value) => {
    value = textReplacer(value, replacements1);
    value = capitalize(value, 'everyFirst');
    value = textReplacer(value, [{string: ' ', with: ''}]);
    return value.charAt(0).toLowerCase() + value.slice(1);
};