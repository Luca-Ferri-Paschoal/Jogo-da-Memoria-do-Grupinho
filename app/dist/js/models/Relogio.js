export class Relogio {
    constructor() { }
    init() {
        this.segs = 0;
        this.mins = 0;
        this.hrs = 0;
        const segundo = 1000;
        const minuto = 60 * segundo;
        const hora = 60 * minuto;
        this.interval1 = setInterval(() => {
            this.segs = this.jaDeu60(this.segs);
        }, segundo);
        this.interval2 = setInterval(() => {
            this.mins = this.jaDeu60(this.mins);
        }, minuto);
        this.interval3 = setInterval(() => {
            this.hrs++;
        }, hora);
    }
    stop() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
        clearInterval(this.interval3);
    }
    get tempo() {
        return {
            segs: this.segs,
            mins: this.mins,
            hrs: this.hrs
        };
    }
    jaDeu60(num) {
        if (++num < 60)
            return num;
        return 0;
    }
}
//# sourceMappingURL=Relogio.js.map