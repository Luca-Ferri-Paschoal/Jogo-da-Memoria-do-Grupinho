import { BaralhoController } from './controllers/BaralhoController.js';
export class JogoDaMemoria {
    constructor() {
        this.divCabecalho = document.querySelector('.cabecalho');
        this.main = document.querySelector('.principal');
        this.divComecarJogo = document.querySelector('.principal__comecar-jogo');
        this.divDados = document.querySelector('.dados');
        this.sectionTabuleiro = document.querySelector('.tabuleiro');
        this.divRestart = document.querySelector('.principal__restart');
        this.baralhoController =
            new BaralhoController(this.sectionTabuleiro, this.divDados);
        this.sectionTabuleiro.addEventListener('click', () => this.verificaSeGanhou());
    }
    iniciaJogo() {
        this.baralhoController.init();
        this.preparaEstilosDoJogo();
    }
    restart() {
        this.preparaSegundaRodada();
        this.baralhoController.init();
    }
    verificaSeGanhou() {
        if (this.baralhoController.ganhouJogo()) {
            setTimeout(() => {
                this.exibeMensagemGanhou();
            }, 1500);
        }
    }
    preparaEstilosDoJogo() {
        this.divCabecalho.classList.add('escondido');
        this.divComecarJogo.classList.add('escondido');
        this.main.classList.add('espande-altura-principal');
        this.divDados.classList.remove('escondido');
        this.sectionTabuleiro.classList.remove('escondido');
    }
    exibeMensagemGanhou() {
        this.divDados.classList.add('escondido');
        this.sectionTabuleiro.classList.add('escondido');
        this.divRestart.classList.remove('escondido');
    }
    preparaSegundaRodada() {
        this.divRestart.classList.add('escondido');
        this.divDados.classList.remove('escondido');
        this.sectionTabuleiro.classList.remove('escondido');
    }
}
//# sourceMappingURL=JogoDaMemoria.js.map