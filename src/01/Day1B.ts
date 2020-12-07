import Parser from '../Parser';

export default class Day1B {

    public run(): number {
        const lines = Parser.readNumberLines(1);
        let res;
        lines.forEach((base) => {
            lines.forEach((compare) => {
                lines.forEach((another) => {
                    if (base + compare + another === 2020) {
                        res = base * compare * another;
                    }
                })
            });
        });

        if (!res) throw 'No result';

        return res;
    }
}
