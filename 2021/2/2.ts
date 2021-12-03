import * as fs from 'fs';

function getPosition(instructions: string[]) : number {
    let position = [0, 0, 0];

    for (let instruct of instructions) {
        let directions = instruct.split(' ');

        switch (directions[0]) {
            case 'forward':
                position[0] += Number(directions[1]);
                break;
            case 'down':
                position[1] += Number(directions[1]);
                break;
            case 'up':
                position[1] -= Number(directions[1]);
                break;
        }
    }

    return position[0] * position[1];
}

function getPosition2(instructions: string[]) : number {
    let position = [0, 0, 0];

    for (let instruct of instructions) {
        let directions = instruct.split(' ');

        switch (directions[0]) {
            case 'forward':
                position[0] += Number(directions[1]);
                position[1] += position[2] * Number(directions[1]);
                break;
            case 'down':
                position[2] += Number(directions[1]);
                break;
            case 'up':
                position[2] -= Number(directions[1]);
                break;
        }
    } 

    return position[0] * position[1];
}

const nums = fs.readFileSync('./2021/2/input.txt','utf8').toString().split("\n");
console.log(getPosition(nums));
console.log(getPosition2(nums));