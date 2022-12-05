import * as fs from 'fs';

const items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getPriorities(input: Array<string>) {
    return input.map(x => {
        let S1 = new Set(x.slice(0, x.length / 2));
        let S2 = new Set(x.slice(x.length / 2));
        let intersect = new Set([...S1].filter(s => S2.has(s)));
        return items.indexOf(intersect.values().next().value) + 1;
    }).reduce((a, c) => a + c);
}

function getBadgePriorities(input: Array<string>) {
    let groups = input.map((e, i, a) => i % 3 == 0 ? a.slice(i, i+3) : '').filter(e => e !== '');

    return groups.map((x) => {
        let S1 = new Set(x[0]);
        let S2 = new Set(x[1]);
        let S3 = new Set(x[2]);
        let intersect = [S1, S2, S3].reduce((a, b) => new Set([...a].filter(x => b.has(x))));
        return items.indexOf(intersect.values().next().value) + 1;
    }).reduce((a, c) => a + c);
}

const input = fs.readFileSync('./2022/3/input_example.txt', 'utf8').split('\n');
console.log(getPriorities(input));
console.log(getBadgePriorities(input));