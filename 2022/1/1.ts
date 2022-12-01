import * as fs from 'fs';

function getBestTotals(calorieTotals: Array<string>) {
    let currentTotal = 0, bestTotals: Array<number> = [];

    for (let item of calorieTotals) {
        if (item == '') {
            bestTotals.push(currentTotal);
            bestTotals = bestTotals.sort((a, b) => a - b).slice(-3);
            currentTotal = 0;
        }
        else {
            currentTotal += parseInt(item);
        }
    }

    return bestTotals;
}

const calorieTotals = fs.readFileSync('./2022/1/input.txt', 'utf8').split('\n');
console.log(getBestTotals(calorieTotals).slice(-1));
console.log(getBestTotals(calorieTotals));