import * as fs from 'fs';

function getBestTotals(calorieTotals: Array<Array<number>>, topCount: number) {
    return calorieTotals.map(e => e.reduce((p, c) => p + c))
                        .sort((a, b) => a - b)             
                        .slice(-topCount);
}

const calorieTotals = fs.readFileSync('./2022/1/input.txt', 'utf8')
                        .split('\n\n')
                        .map(e => e.split('\n')
                        .map(s => parseInt(s)));

console.log(getBestTotals(calorieTotals, 1));
console.log(getBestTotals(calorieTotals, 3));