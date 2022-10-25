const frente = true;
const tras = false;
export class Carta {
    constructor(image, descricao, alt, id) {
        this.image = image;
        this.descricao = descricao;
        this.alt = alt;
        this._parEncontrado = false;
        this._virada = tras;
        this._id = {
            num: id,
            classe: ''
        };
    }
    static criaCartasAeB(image, descricao, alt, id) {
        const cartaA = new CartaA(image, descricao, alt, id);
        const cartaB = new CartaB(image, descricao, alt, id);
        return [cartaA, cartaB];
    }
    get virada() {
        return this._virada;
    }
    get id() {
        return this._id;
    }
    set parEncontrado(achou) {
        this._parEncontrado = achou;
    }
    viraFrente() {
        this._virada = frente;
    }
    viraTras() {
        if (!this._parEncontrado)
            this._virada = tras;
    }
    ehPar(carta) {
        if (this.id.num === carta.id.num &&
            this.id.classe !== carta.id.classe) {
            this.parEncontrado = true;
            carta.parEncontrado = true;
            return true;
        }
        return false;
    }
}
class CartaA extends Carta {
    constructor(image, descricao, alt, id) {
        super(image, descricao, alt, id);
        this._id.classe = 'a';
    }
}
class CartaB extends Carta {
    constructor(image, descricao, alt, id) {
        super(image, descricao, alt, id);
        this._id.classe = 'b';
    }
}
//# sourceMappingURL=Carta.js.map