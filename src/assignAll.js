import {assign} from "./assign";

export const assignAll = (target = {}, objArr) =>
    objArr.reduce((acc, obj) => assign(acc,obj), target);