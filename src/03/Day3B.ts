import Parser from '../Parser';

class Path {

    public speedRight: number;
    public speedDown: number;

    constructor(right: number, down: number) {
        this.speedRight = right;
        this.speedDown = down;
    }
}

export default class Day3B {

    private readonly flatMap: string[];
    private readonly lengthX: number;
    private readonly lengthY: number;

    constructor() {
        const lines = Parser.readLines(3);
        const flatMap: string[] = [];

        lines.forEach((line) => {
            line.split('').forEach(char => flatMap.push(char));
        });

        this.flatMap = flatMap;
        this.lengthX = lines[0].length;
        this.lengthY = lines.length;
    }

    public run() {
        const paths = [
            new Path(1, 1),
            new Path(3, 1),
            new Path(5, 1),
            new Path(7, 1),
            new Path(1, 2),
        ];

        return paths.reduce((acc, path) => {
            let posX = 0;
            let posY = 0;
            let trees = 0;

            while (posY < this.lengthY) {
                if (this.readCord(posX, posY) === '#') {
                    trees++;
                }
                posX += path.speedRight;
                posY += path.speedDown;
            }

            return acc * trees;
        }, 1);
    }

    readCord(getX: number, getY: number): string {
        let newX = getX;
        if (getX > this.lengthX) {
            newX = getX % this.lengthX;
        }

        const index = newX + this.lengthX * getY;
        return this.flatMap[index];
    }

}
