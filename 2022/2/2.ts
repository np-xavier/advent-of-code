import * as fs from 'fs';

function calculateInitialStratScore(roundStrats: Array<Array<string>>) {
    let totalScore = 0;

    for (let entry of roundStrats) {
        if (entry[1] === oppData[entry[0]].loses) {
            totalScore += pointData[entry[1]] + 6;
            console.log('win', totalScore);
        }
        else if (entry[1] === oppData[entry[0]].draws) {
            totalScore += pointData[entry[1]] + 3;
            console.log('draw', totalScore);
        }
        else {
            totalScore += pointData[entry[1]];
            console.log('lose', totalScore);
        }
    }

    return totalScore;
}

function calculateFinalStratScore(roundStrats: Array<Array<string>>) {
    let totalScore = 0;

    for (let entry of roundStrats) {
        if (entry[1] === 'Z') {
            totalScore += pointData[oppData[entry[0]].loses] + 6;
            console.log('win', totalScore);
        }
        else if (entry[1] === 'Y') {
            totalScore += pointData[oppData[entry[0]].draws] + 3;
            console.log('draw', totalScore);
        }
        else {
            totalScore += pointData[oppData[entry[0]].wins];
            console.log('lose', totalScore);
        }
    }

    return totalScore;
}

// Rock: A, Paper: B, Scissors: C
// Rock: X, Paper: Y, Scissors: Z 
// X: Lose, Y: Draw, Z: Win

const roundStrats = fs.readFileSync('./2022/2/input.txt', 'utf8').split('\n').map(e => e.split(' '));

let oppData: any = {
    'A': { loses: 'Y', draws: 'X', wins: 'Z' },
    'B': { loses: 'Z', draws: 'Y', wins: 'X' },
    'C': { loses: 'X', draws: 'Z', wins: 'Y' }
};

let pointData: any = {
    'X': 1,
    'Y': 2,
    'Z': 3
};

console.log(calculateInitialStratScore(roundStrats));
console.log(calculateFinalStratScore(roundStrats));