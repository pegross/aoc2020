"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = __importDefault(require("../Parser"));
class Token {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.char = '';
        this.input = '';
    }
}
class Day2A {
    run() {
        const lines = Parser_1.default.readLines(2);
        const lineTokens = lines.map(el => Day2A.parseTokens(el));
        const valid = lineTokens.filter((tokens) => {
            if (tokens === null) {
                return false;
            }
            const count = tokens.input.split(tokens.char).length - 1;
            return count >= tokens.min && count <= tokens.max;
        });
        return valid.length;
    }
    static parseTokens(line) {
        /** @see https://regex101.com/r/1FolVm/1 */
        const regex = /(\d+)-(\d+)\s([^\s]):\s([^\s]+)/;
        const tokens = line.match(regex);
        if (!tokens) {
            return null;
        }
        return {
            min: Number(tokens[1]),
            max: Number(tokens[2]),
            char: tokens[3],
            input: tokens[4]
        };
    }
}
exports.default = Day2A;
