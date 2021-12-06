import * as fs from 'fs';

function parseCoordinate(coordinate: string) : number[] {
    return coordinate.split(',').map(e => parseInt(e));
}

function drawLine(x0, y0, x1, y1, plane) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;
    let count = 1;

    while (true) {
        if (plane[y0][x0] != '.') {
            count = parseInt(plane[y0][x0]) + 1;
        }

        plane[y0][x0] = count.toString();
        count = 1;

        if ((x0 === x1) && (y0 === y1)) 
            break;

        let e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x0 += sx; }
        if (e2 < dx) { err += dx; y0 += sy; }
    }

    return plane;
}

function plotSolution(coordinates: number[][][], diagonal: boolean) {
    let plane = Array.from(new Array(1000), () => Array.from(new Array(1000), () => '.' ));

    if (!diagonal) {
        coordinates = coordinates.filter(e => (e[0][0] == e[1][0]) || (e[0][1] == e[1][1]));
    }

    for (let line of coordinates) {
        let x1 = line[0][0];
        let y1 = line[0][1];
        let x2 = line[1][0];
        let y2 = line[1][1];
        plane = drawLine(x1, y1, x2, y2, plane);
    }

    return plane;
}

function countOverlaps(plane: string[][]) {
    let count = 0;

    for (let x of plane) {
        for (let y of x) {
            if (parseInt(y) > 1) {
                count++;
            }
        }
    }

    return count;
}

const data = fs.readFileSync('./2021/5/input.txt','utf8').toString().split("\n").map(e => e.split(' -> '));
let coords = data.map(e => e.map(f => parseCoordinate(f)));
let result = plotSolution(coords, true);
console.log(countOverlaps(result));
