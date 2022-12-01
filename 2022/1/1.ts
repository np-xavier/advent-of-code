import * as fs from 'fs';

// Thoughts - bestTotals grows into a large array as the file size increases - can we reduce?
function getBestTotals(calorieTotals: Array<string>) {
    let curTotal = 0, bestTotals = [];

    for (let food of calorieTotals) {
        if (food == '') {
            bestTotals.push(curTotal);
            curTotal = 0;
        }
        else {
            curTotal += parseInt(food);
        }
    }

    return bestTotals.sort((a, b) => a - b);
}

const calorieTotals = fs.readFileSync('./2022/1/input.txt', 'utf8').split('\n');

console.log(getBestTotals(calorieTotals).slice(-1));
console.log(getBestTotals(calorieTotals).slice(-3));