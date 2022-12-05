import * as fs from 'fs';

function calculateStratScore(roundStrats: Array<Array<string>>, first = true) {
    let totalScore = 0;
    let data: any = {
        'A': { loses: 'Y', draws: 'X', wins: 'Z' },
        'B': { loses: 'Z', draws: 'Y', wins: 'X' },
        'C': { loses: 'X', draws: 'Z', wins: 'Y' },
        'X': 1,
        'Y': 2,
        'Z': 3
    };
    // groupToMap??
    for (let entry of roundStrats) {
        if (first) {
            if (entry[1] === data[entry[0]].loses) {
                totalScore += data[entry[1]] + 6;
            }
            else if (entry[1] === data[entry[0]].draws) {
                totalScore += data[entry[1]] + 3;
            }
            else {
                totalScore += data[entry[1]];
            }
        }
        else {
            if (entry[1] === 'Z') {
                totalScore += data[data[entry[0]].loses] + 6;
            }
            else if (entry[1] === 'Y') {
                totalScore += data[data[entry[0]].draws] + 3;
            }
            else {
                totalScore += data[data[entry[0]].wins];
            }
        }
    }
    
    return totalScore;
}

const roundStrats = fs.readFileSync('./2022/2/input.txt', 'utf8').split('\n').map(e => e.split(' '));

console.log(calculateStratScore(roundStrats));
console.log(calculateStratScore(roundStrats, false));