import * as fs from 'fs';

const items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getPriorities(input: Array<string>) {
    let total = 0;

    for (let row of input) {
        let S1 = new Set(row.slice(0, row.length / 2));
        let S2 = new Set(row.slice(row.length / 2));
        let intersect = new Set([...S1].filter(s => S2.has(s)));
        total += (items.indexOf(intersect.values().next().value) + 1);
    }

    return total;
}

function getBadgePriorities(input: Array<string>) {
    let total = 0;

    console.log(input);
    for (let i = 0; i < input.length; i += 3) {
        let S1 = new Set(input[i]);
        let S2 = new Set(input[i+1]);
        let S3 = new Set(input[i+2]);
        let intersect = [S1, S2, S3].reduce((a, b) => new Set([...a].filter(x => b.has(x))));
        total += (items.indexOf(intersect.values().next().value) + 1);
        console.log(intersect);
    }

    return total;
}

const input = fs.readFileSync('./2022/3/input.txt', 'utf8').split('\n');
console.log(getPriorities(input));
console.log(getBadgePriorities(input));