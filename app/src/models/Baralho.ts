import { dadosDasCartas } from '../data/dadosCartas.js';
import { interfaceProgresso as Progresso} from '../interfaces/interfaceProgresso.js';
import { Carta } from './Carta.js';

export class Baralho {
    private _lista: Array<Carta>;
    private paresRestantes: number;
    private paresEncontrados: number;

    private primeiraCarta: Carta | null;
    private segundaCarta: Carta | null;

    constructor() {}

    get lista(): Array<Carta> {
        const array: Array<Carta> = [];
        return array.concat(this._lista);
    }

    get progresso(): Progresso {
        return {
            restante: this.paresRestantes,
            encontrados: this.paresEncontrados,
        }
    }

    public init() {
        this._lista = [];
        this.paresRestantes = 0;
        this.paresEncontrados = 0;
        
        this.criaLista();
        this.embaralha();
        
        this.primeiraCarta = null;
        this.segundaCarta = null;
    }

    public desviraCarta(index: number) {
        const carta = this._lista[index];

        if (!carta.virada) {
            carta.viraFrente();
            this.gravaCartas(carta);
        }

        return carta;
    }

    public virouDuasCartas(): boolean {
        return this.primeiraCarta !== null && 
            this.segundaCarta !== null
        ;
    }

    public saoPares() {
        if (this.primeiraCarta && 
            this.segundaCarta
        ) {
            const retorno: boolean = this.primeiraCarta.ehPar(this.segundaCarta);

            if (retorno === false) {
                this.primeiraCarta.viraTras();
                this.segundaCarta.viraTras();
            } else {
                this.paresRestantes--;
                this.paresEncontrados++;
            }

            this.primeiraCarta = null;
            this.segundaCarta = null;

            return retorno;
        }

        return false;
    }

    public jogoCompleto(): boolean {
        return this.paresRestantes === 0;
    }

    private gravaCartas(carta: Carta) {
        if (this.primeiraCarta === null)
            this.primeiraCarta = carta
        else if (this.segundaCarta === null)
            this.segundaCarta = carta
        ;
    }

    private criaLista() {
        dadosDasCartas.forEach((dado, index: number): void => {
            const cartas = Carta.criaCartasAeB(
                dado.image,
                dado.descricao,
                dado.alt,
                index
            )

            this._lista = this._lista.concat(cartas);
            this.paresRestantes++;
        });

    }

    private embaralha(): void {
        const arrayEmbaralhado: Array<Carta> = [];
        const vezes = this._lista.length;

        for (let i = 0; i < vezes; i++) {
            const numAleatorio: number = Math.floor(
                Math.random() * this._lista.length
            );

            arrayEmbaralhado.push(this._lista.splice(numAleatorio, 1)[0]);
        }

        this._lista = arrayEmbaralhado;
    }
}
