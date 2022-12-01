import * as fs from 'fs';

const calorieTotalStrings = fs.readFileSync('./2022/1/input.txt', 'utf8').split('\n\n').map(e => e.split('\n')); // Break down into multiarray
const calorieTotals = calorieTotalStrings.map(e => e.map(s => parseInt(s))); // Convert entries to numbers

function getBestTotals(calorieTotals: Array<Array<number>>, topCount: number) {
    let bestTotals: Array<number> = [];

    for (let item of calorieTotals) {
        bestTotals.push(item.reduce((p, c) => p + c));
        bestTotals = bestTotals.sort((a, b) => a - b).slice(-topCount);    
    }

    return bestTotals;
}

console.log(getBestTotals(calorieTotals, 1));
console.log(getBestTotals(calorieTotals, 3));