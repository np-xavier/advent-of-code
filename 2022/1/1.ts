import * as fs from 'fs';

function getBestTotal(calorieTotals: Array<string>) {
    let curTotal = 0, bestTotal = 0;

    for (let food of calorieTotals) {
        if (food == '') {
            bestTotal = curTotal > bestTotal ? curTotal : bestTotal;
            curTotal = 0;
        }
        else {
            curTotal += parseInt(food);
        }
    }

    return bestTotal;
}

const calorieTotals = fs.readFileSync('./2022/1/input_example.txt', 'utf8').split('\n');

console.log(calorieTotals);
console.log(getBestTotal(calorieTotals));