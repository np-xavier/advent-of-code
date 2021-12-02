import * as fs from 'fs';

function getPosition(positions: string[]) : number {
    let pos = [0, 0, 0];

    for (let i = 0; i < positions.length; i++) {
        let directions = positions[i].split(' ');

        switch (directions[0]) {
            case 'forward':
                pos[0] = pos[0] + Number(directions[1]);
                break;
            case 'down':
                pos[1] = pos[1] + Number(directions[1]);
                break;
            case 'up':
                pos[1] = pos[1] - Number(directions[1]);
                break;
        }
    } 

    return pos[0] * pos[1];
}

function getPosition2(positions: string[]) : number {
    let pos = [0, 0, 0];

    for (let i = 0; i < positions.length; i++) {
        let directions = positions[i].split(' ');

        switch (directions[0]) {
            case 'forward':
                pos[0] = pos[0] + Number(directions[1]);
                pos[1] = pos[1] + pos[2] * Number(directions[1]);
                break;
            case 'down':
                pos[2] += Number(directions[1]);
                break;
            case 'up':
                pos[2] -= Number(directions[1]);
                break;
        }
    } 

    return pos[0] * pos[1];
}

const nums = fs.readFileSync('./2021/1/input.txt','utf8').toString().split("\n");
console.log(getPosition2(nums));