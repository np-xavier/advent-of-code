"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function countIncreases(numbers) {
    let count = 0;
    // Can improve with array.reduce()
    for (let i = 1; i < numbers.length; i++) {
        count = (numbers[i - 1] < numbers[i]) ? count + 1 : count;
    }
    return count;
}
function countThreeWindowIncreases(numbers) {
    let count = 0;
    // And here, array.slice should be put into use
    for (let i = 0; i < numbers.length - 3; i++) {
        var cur_moving_sum = numbers[i] + numbers[i + 1] + numbers[i + 2];
        var next_moving_sum = numbers[i + 1] + numbers[i + 2] + numbers[i + 3];
        count = (cur_moving_sum < next_moving_sum) ? count + 1 : count;
    }
    return count;
}
const file = fs.readFileSync('./2021/1/input.txt', 'utf8').toString();
const nums = file.split("\n").map(Number);
console.log(countIncreases(nums));
console.log(countThreeWindowIncreases(nums));
//# sourceMappingURL=1.js.map