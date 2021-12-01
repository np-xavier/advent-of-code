import * as fs from 'fs';

function countIncreases(numbers: number[]) : number {
    let count = 0;

    // Could use array.reduce or a similar functional approach but just going to go with this cause it's 6am.
    for (let i = 1; i < numbers.length; i++) {
        count = (numbers[i-1] < numbers[i]) ? count + 1 : count;
    }

    return count;
}

function countThreeWindowIncreases(numbers: number[]) : number {
    let count = 0;

    for(let i = 0; i < numbers.length-3; i++) {
        var cur_moving_sum = numbers[i] + numbers[i+1] + numbers[i+2];
        var next_moving_sum = numbers[i+1] + numbers[i+2] + numbers[i+3];
        count = (cur_moving_sum < next_moving_sum) ? count + 1 : count;
    }

    return count;
}

const file = fs.readFileSync('./2021/1/input.txt','utf8').toString();
const nums = file.split("\n").map(Number);
console.log(countIncreases(nums));
console.log(countThreeWindowIncreases(nums));
