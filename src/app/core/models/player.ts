export class Player{
    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    public static create(name: string, score: number): Player {
        if (typeof name === "string" && score === 0) {
        return new Player(name, score);
        } else {
            throw new Error("Invalid Player");
        }
    }
}