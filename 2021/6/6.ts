import * as fs from 'fs';

function getStateAfterNDays(initialState: number[], days: number): number {
    const count = new Array(9).fill(0);
    count.fill(0);
    initialState.forEach((i) => count[i]++);
  
    for (let i = 0; i < days; i++) {
      let today = i % count.length;
      let reprods = count[today];
      count[(today + 9) % count.length] += reprods;
      count[(today + 7) % count.length] += reprods;
      count[today] -= reprods;
    }
  
    return count.reduce((accumulator, num) => accumulator + num);
  }

const data = fs.readFileSync('./2021/6/input.txt','utf8').toString().split(",").map(e => parseInt(e));
console.log(getStateAfterNDays(data, 256));
