import * as fs from 'fs';

function getStateAfterNDays(initialState: number[], expensive: boolean) : number {
    let transforms: number[] = [];
    let state = [...initialState];
    let optimal = 9999999999;

    for (let target = 0; target <= Math.max(...state); target++) {
        for (let num of state) {
            let diff = Math.abs(num - target);
            let jump = expensive ? diff*(diff+1)/2 : diff;
            transforms.push(jump);
        }
        
        let sum = transforms.reduce((a, e) => a + e);
        optimal = (optimal <= sum) ? optimal : sum;
        transforms = [];
    }

    return optimal;
}

const data = fs.readFileSync('./2021/7/input.txt','utf8').toString().split(",").map(e => parseInt(e));
console.log(getStateAfterNDays(data, false));
console.log(getStateAfterNDays(data, true));