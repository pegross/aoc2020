import Parser from '../Parser';

class Token {
    public posA: number = 0;
    public posB: number = 0;
    public char: string = '';
    public input: string = '';
}

export default class Day2B {

    public run() {
        const lines = Parser.readLines(2);
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

    private static parseTokens(line: string): Token | null {

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
        }
    }
}
