import { interfaceTempo as Tempo } from '../interfaces/interefaceTempo.js';

export class Relogio {
    private segs: number;
    private mins: number;
    private hrs: number;

    private interval1: NodeJS.Timer;
    private interval2: NodeJS.Timer;
    private interval3: NodeJS.Timer;

    constructor() {}

    public init(): void {
        this.segs = 0;
        this.mins = 0;
        this.hrs = 0;

        const segundo: number = 1000;
        const minuto: number = 60 * segundo;
        const hora: number = 60 * minuto;

        this.interval1 = setInterval(
            () => {
                this.segs = this.jaDeu60(this.segs)
            }
        , segundo);

        this.interval2 = setInterval(
            () => {
                this.mins = this.jaDeu60(this.mins)
            }
        , minuto);

        this.interval3 = setInterval(
            () => {
                this.hrs++
            }
        , hora);
    }

    public stop(): void {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
        clearInterval(this.interval3);
    }

    get tempo(): Tempo {
        return {
            segs: this.segs,
            mins: this.mins,
            hrs: this.hrs
        }
    }

    private jaDeu60(num: number): number {
        if (++num < 60) return num;
        return 0;
    }
}
