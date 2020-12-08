import Parser from '../Parser';

export default class Day3A {

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
        const speedDown = 1;
        const speedRight = 3;

        let posX = 0;
        let posY = 0;
        let trees = 0;

        while (posY < this.lengthY - 1) {
            if (this.readCord(posX, posY) === '#') {
                trees++;
            }
            posX += speedRight;
            posY += speedDown;
        }

        return trees;
    }

    readCord(getX: number, getY: number): string {
        let newX = getX;
        if(getX >= this.lengthX) {
            newX = getX % this.lengthX;
        }

        const index = newX + this.lengthX * getY;
        return this.flatMap[index];
    }

}
