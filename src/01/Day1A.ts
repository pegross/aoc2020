import Parser from '../Parser';

export default class Day1A {

    public run(): number {
        const lines = Parser.readNumberLines(1);
        let res;
        lines.forEach((base) => {
            lines.forEach((compare) => {
                if (base + compare === 2020) {
                    res = base * compare;
                }
            });
        });

        if(!res) throw 'No result';

        return res;
    }
}
