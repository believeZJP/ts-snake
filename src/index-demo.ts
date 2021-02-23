/*
 * @file: file
 * @author: zhaojianpeng
 */
import './styles/index.less'

import { hi } from './m1'
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(2,3));
console.log(hi);

const obj = { name: '22', age: 1};
obj.age = 23;

console.log(obj);
// console.log(Promise);

const add = (a: number, b: number): number=>  {
    return a + b;
}
console.log(add(22, 33), '加法');