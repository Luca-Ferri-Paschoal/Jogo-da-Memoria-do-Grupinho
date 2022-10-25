import { dadosDasCartas } from '../data/dadosCartas.js';
import { Carta } from './Carta.js';
export class Baralho {
    constructor() { }
    get lista() {
        const array = [];
        return array.concat(this._lista);
    }
    get progresso() {
        return {
            restante: this.paresRestantes,
            encontrados: this.paresEncontrados,
        };
    }
    init() {
        this._lista = [];
        this.paresRestantes = 0;
        this.paresEncontrados = 0;
        this.criaLista();
        this.embaralha();
        this.primeiraCarta = null;
        this.segundaCarta = null;
    }
    desviraCarta(index) {
        const carta = this._lista[index];
        if (!carta.virada) {
            carta.viraFrente();
            this.gravaCartas(carta);
        }
        return carta;
    }
    virouDuasCartas() {
        return this.primeiraCarta !== null &&
            this.segundaCarta !== null;
    }
    saoPares() {
        if (this.primeiraCarta &&
            this.segundaCarta) {
            const retorno = this.primeiraCarta.ehPar(this.segundaCarta);
            if (retorno === false) {
                this.primeiraCarta.viraTras();
                this.segundaCarta.viraTras();
            }
            else {
                this.paresRestantes--;
                this.paresEncontrados++;
            }
            this.primeiraCarta = null;
            this.segundaCarta = null;
            return retorno;
        }
        return false;
    }
    jogoCompleto() {
        return this.paresRestantes === 0;
    }
    gravaCartas(carta) {
        if (this.primeiraCarta === null)
            this.primeiraCarta = carta;
        else if (this.segundaCarta === null)
            this.segundaCarta = carta;
    }
    criaLista() {
        dadosDasCartas.forEach((dado, index) => {
            const cartas = Carta.criaCartasAeB(dado.image, dado.descricao, dado.alt, index);
            this._lista = this._lista.concat(cartas);
            this.paresRestantes++;
        });
    }
    embaralha() {
        const arrayEmbaralhado = [];
        const vezes = this._lista.length;
        for (let i = 0; i < vezes; i++) {
            const numAleatorio = Math.floor(Math.random() * this._lista.length);
            arrayEmbaralhado.push(this._lista.splice(numAleatorio, 1)[0]);
        }
        this._lista = arrayEmbaralhado;
    }
}
//# sourceMappingURL=Baralho.js.map