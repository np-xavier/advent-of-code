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


function e2(nums: string[]) {
    // examine first bit
    // keep numbers selected by bit criteria
    // when one number left, this is the rating value
    // move to the next bit on the right

    // oxygen generator: bit == most common value in bit pos or 1 if equal
    // co2 scrubber: bit == least common value in bit pos or 0 if equal
}

const nums = fs.readFileSync('./2021/3/input_example.txt','utf8').toString().split("\n");
console.log(getGammaAndEpsilon(nums));
