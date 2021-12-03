import * as fs from 'fs';

function getGammaAndEpsilon(nums: string[]) : number {
    let gamma = "";
    let epsilon = "";

    for (let col = 0; col < nums[0].length; col++) {
        let zeroCount = 0;
        let oneCount = 0;

        for (let row of nums) {
            if (Number(row[col]) == 0) {
                zeroCount++;
            }
            else {
                oneCount++;
            }
        }

        gamma += (zeroCount > oneCount) ? 0 : 1;
        epsilon += (zeroCount < oneCount) ? 0 : 1;
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}


function getLifeSupport(nums: string[]) : number {
    let mostCommon: number;
    let leastCommon: number;
    let oxygenRating: string[] = nums;
    let co2Rating: string[] = nums;

    for (let col = 0; col < nums[0].length; col++) {
        let zeroCount = [0, 0];
        let oneCount = [0, 0];

        for (let row of oxygenRating) {
            if (Number(row[col]) == 0) {
                zeroCount[0]++;
            }
            else {
                oneCount[0]++;
            }
        }

        for (let row of co2Rating) {
            if (Number(row[col]) == 0) {
                zeroCount[1]++;
            }
            else {
                oneCount[1]++;
            }
        }

        mostCommon = (zeroCount[0] <= oneCount[0]) ? 1 : 0;
        leastCommon = (zeroCount[1] <= oneCount[1]) ? 0 : 1;

        oxygenRating = oxygenRating.length > 1 ? oxygenRating.filter(e => e.charAt(col) == mostCommon.toString()) : oxygenRating;
        co2Rating = co2Rating.length > 1 ? co2Rating.filter(e => e.charAt(col) == leastCommon.toString()) : co2Rating;
    }

    var oxy = parseInt(oxygenRating[0], 2);
    var co2 = parseInt(co2Rating[0], 2)
    return oxy * co2;
}

const nums = fs.readFileSync('./2021/3/input.txt','utf8').toString().split("\n");
console.log(getGammaAndEpsilon(nums));
console.log(getLifeSupport(nums));
