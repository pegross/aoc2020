"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = __importDefault(require("../Parser"));
class Token {
    constructor() {
        this.posA = 0;
        this.posB = 0;
        this.char = '';
        this.input = '';
    }
}
class Day2B {
    run() {
        const lines = Parser_1.default.readLines(2);
        const lineTokens = lines.map(el => Day2B.parseTokens(el));
        const valid = lineTokens.filter((tokens) => {
            if (tokens === null) {
                return false;
            }
            const chars = tokens.input.split('');
            chars.unshift('');
            // who let the XOR out, who?
            return 1 == Number(chars[tokens.posA] === tokens.char) + Number(chars[tokens.posB] === tokens.char);
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
            posA: Number(tokens[1]),
            posB: Number(tokens[2]),
            char: tokens[3],
            input: tokens[4]
        };
    }
}
exports.default = Day2B;
