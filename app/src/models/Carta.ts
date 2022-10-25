import { interfaceId as Id } from '../interfaces/interfaceId.js';

const frente = true;
const tras = false;

export abstract class Carta {
    protected _parEncontrado: boolean = false;
    protected _virada: boolean = tras;
    protected _id: Id;

    constructor(
        public readonly image: string,
        public readonly descricao: string,
        public readonly alt: string,
        id: number
    ) {
        this._id = { 
            num: id,
            classe: ''
        }
    }

    static criaCartasAeB(
        image: string,
        descricao: string,
        alt: string,
        id: number,
    ): Array<Carta>
    
    {
        const cartaA = new CartaA(
            image,
            descricao,
            alt,
            id
        );

        const cartaB = new CartaB(
            image,
            descricao,
            alt,
            id
        );

        return [cartaA, cartaB]
    }

    get virada(): boolean {
        return this._virada;
    }

    get id(): Id {
        return this._id;
    }

    protected set parEncontrado(achou: boolean) {
        this._parEncontrado = achou;
    }

    viraFrente(): void {
        this._virada = frente;
    }

    viraTras(): void {
        if (!this._parEncontrado) this._virada = tras;
    }

    ehPar(carta: Carta): boolean {
        if (
            this.id.num === carta.id.num &&
            this.id.classe !== carta.id.classe 
        ) {
            this.parEncontrado = true;
            carta.parEncontrado = true;
            return true;
        }

        return false;
    }
}

class CartaA extends Carta {
    constructor(
        image: string,
        descricao: string,
        alt: string,
        id: number
    ) {
        super(
            image,
            descricao,
            alt,
            id
        );

        this._id.classe = 'a';
    }
}

class CartaB extends Carta {
    constructor(
        image: string,
        descricao: string,
        alt: string,
        id: number
    ) {
        super(
            image,
            descricao,
            alt,
            id
        );

        this._id.classe = 'b';
    }
}
