import * as fs from 'fs';

function getSum(nums: number[], total: number): number {
    let match = 0;
    
    nums.forEach((fix) => {
        nums.forEach((compare) => {
            let n = fix + compare;

            if (n == total) {
                match = fix * compare;
            }
        })
    });

    return match;
}

const file = fs.readFileSync('./2020/1/input.txt','utf8').toString();
const nums = file.split("\n").map(Number);
console.log(getSum(nums, 2020));

//console.log(JSON.stringify(nums));