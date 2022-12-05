import * as fs from 'fs';

function countIntervals(sizes: any) {
    let contained = 0, overlaps= 0;
    
    for (let row of sizes) {
        if (row[1][0] >= row[0][0] && row[1][1] <= row[0][1]) {
            overlaps++;
            contained++;
        }
        else if (row[0][0] >= row[1][0] && row[0][1] <= row[1][1]) {
            overlaps++;
            contained++;
        }
    }

    return [contained, overlaps];
}

const input = fs.readFileSync('./2022/4/input.txt', 'utf8').split('\n').map(x => x.split(','));
const sizes = input.map(x => x.map(x => x.split('-').map(x => parseInt(x))));

console.log(input);
console.log(sizes);
console.log(countIntervals(sizes)[0]);