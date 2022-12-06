import * as fs from 'fs';
import * as _ from 'lodash';
const input = fs.readFileSync('./2022/5/input_example.txt', 'utf8');
let foo = new RegExp(/^move\s([0-9]+)\sfrom\s([1-9])\sto\s([1-9])$/);
foo.exec(input);
console.log(foo.exec(input));