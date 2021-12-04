import * as fs from 'fs';

const nums = fs.readFileSync('./2021/4/input.txt','utf8').toString().split("\n\n");

function getSum(board: string[][]) : number {
    let sum = 0;

    for (let i = 0; i < board?.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let res = parseInt(board[i][j])
            if (res != -1) {
                sum += res;
            }  
        }
    }

    return sum;
}

function findWin(choices: string, boards: string[][][]) : any {
    for (let choice of choices.split(",")) {
        for (let i = 0; i < boards.length; i++) {
            for (let j = 0; j < boards[i].length; j++) { 
                for (let k = 0; k < boards[i][j].length; k++) {
                    boards[i][j][k] = (boards[i][j][k] == choice) ? "-1" : boards[i][j][k];
                    if (boards[i][j].every(e => e == '-1')) {
                        return { board: boards[i], choice: choice };
                    }
                    for (let x = 0; x < 5; x++) {
                        if (boards[i].every(e => e[x] == '-1')) {
                            return { board: boards[i], choice: choice };
                        }
                    }
                }
            }
        }
    }
}

function findWin2(choices: string, boards: string[][][]) : any {
    for (let choice of choices.split(",")) {
        for (let i = 0; i < boards.length; i++) {
            for (let j = 0; j < boards[i].length; j++) { 
                for (let k = 0; k < boards[i][j].length; k++) {
                    boards[i][j][k] = (boards[i][j][k] == choice) ? "-1" : boards[i][j][k];
                    if (boards[i][j].every(e => e == '-1')) {
                        let a = { board: boards[i], choice: choice };
                        boards.splice(i, 1);
                        return a;
                    }
                    for (let x = 0; x < 5; x++) {
                        if (boards[i].every(e => e[x] == '-1')) {
                            let a = { board: boards[i], choice: choice };
                            boards.splice(i, 1);
                            return a;
                        }
                    }
                }
            }
        }
    }
}

let choices = nums[0];
let bingo: string[][] = [];
let rows: string[][] = [];
let groupedBingo = [];

for (let board of nums) {
    bingo.push(board.split("\n"));
}

bingo.shift();

for (let row of bingo) {
    for (let i = 0; i < row.length; i++) {
        rows.push(row[i].split(" ").filter(e => e != ""))
    }
}

let window = 5;
for (let i = 0; i < rows.length; i += window) {
    groupedBingo.push(rows.slice(i, i + window));
}

groupedBingo.pop();

let result = findWin2(choices, groupedBingo);

while (groupedBingo.length > 0) {
    result = findWin2(choices, groupedBingo);
}

console.log(getSum(result.board), result.choice);
console.log(getSum(result.board) * result.choice);
