"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
class Parser {
    static readRaw(day) {
        const inputSubDir = process.env.NODE_ENV === 'test' ? 'sample' : 'real';
        const fileName = day.toString().padStart(2, '0') + '.txt';
        const inputPath = '../input/' + inputSubDir + '/' + fileName;
        return fs.readFileSync(path.resolve(__dirname, inputPath)).toString();
    }
    static readLines(day) {
        return Parser.readRaw(day).split('\n');
    }
    static readNumberLines(day) {
        return Parser.readLines(day)
            .map(el => parseInt(el))
            .filter(el => !isNaN(el));
    }
}
exports.default = Parser;
