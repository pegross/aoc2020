import Parser from '../Parser';

class Token {
    public min: number = 0;
    public max: number = 0;
    public char: string = '';
    public input: string = '';
}

export default class Day2A {

    public run() {
        const lines = Parser.readLines(2);
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

    private static parseTokens(line: string): Token | null {

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
        }
    }
}
