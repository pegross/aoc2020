const fs = require('fs');
const path = require('path');

export default class Parser {

    public static readRaw(day: number): string {
        const inputSubDir = process.env.NODE_ENV === 'test' ? 'sample' : 'real';
        const fileName = day.toString().padStart(2, '0') + '.txt';
        const inputPath = '../input/' + inputSubDir + '/' + fileName;
        return fs.readFileSync(path.resolve(__dirname, inputPath)).toString();
    }

    public static readLines(day: number): string[] {
        return Parser.readRaw(day).split('\n');
    }

    public static readNumberLines(day: number): number[] {
        return Parser.readLines(day)
            .map(el => parseInt(el))
            .filter(el => !isNaN(el));
    }
}
