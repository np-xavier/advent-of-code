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
function getPosition(positions) {
    let pos = [0, 0, 0];
    for (let i = 0; i < positions.length; i++) {
        let directions = positions[i].split(' ');
        switch (directions[0]) {
            case 'forward':
                pos[0] = pos[0] + Number(directions[1]);
                break;
            case 'down':
                pos[1] = pos[1] + Number(directions[1]);
                break;
            case 'up':
                pos[1] = pos[1] - Number(directions[1]);
                break;
        }
    }
    return pos[0] * pos[1];
}
function getPosition2(positions) {
    let pos = [0, 0, 0];
    for (let i = 0; i < positions.length; i++) {
        let directions = positions[i].split(' ');
        switch (directions[0]) {
            case 'forward':
                pos[0] = pos[0] + Number(directions[1]);
                pos[1] = pos[1] + pos[2] * Number(directions[1]);
                break;
            case 'down':
                pos[2] += Number(directions[1]);
                break;
            case 'up':
                pos[2] -= Number(directions[1]);
                break;
        }
    }
    return pos[0] * pos[1];
}
const file = fs.readFileSync('./2021/2/input.txt', 'utf8').toString();
const nums = file.split("\n");
console.log(getPosition2(nums));
//# sourceMappingURL=2.js.map