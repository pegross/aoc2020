"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = __importDefault(require("../Parser"));
class Day1A {
    run() {
        const lines = Parser_1.default.readNumberLines(1);
        let res;
        lines.forEach((base) => {
            lines.forEach((compare) => {
                if (base + compare === 2020) {
                    res = base * compare;
                }
            });
        });
        if (!res)
            throw 'No result';
        return res;
    }
}
exports.default = Day1A;
