import { BaralhoController } from './controllers/BaralhoController.js';

export class JogoDaMemoria {
    private divCabecalho: HTMLElement;
    private main: HTMLElement;
    private divComecarJogo: HTMLElement;
    private divDados: HTMLElement;
    private sectionTabuleiro: HTMLElement;
    private divRestart: HTMLElement;

    private baralhoController: BaralhoController;

    constructor() {
        this.divCabecalho = document.querySelector('.cabecalho') as HTMLElement;
        this.main = document.querySelector('.principal') as HTMLElement;
        this.divComecarJogo = document.querySelector('.principal__comecar-jogo') as HTMLElement;
        this.divDados = document.querySelector('.dados') as HTMLElement;
        this.sectionTabuleiro = document.querySelector('.tabuleiro') as HTMLElement;
        this.divRestart = document.querySelector('.principal__restart') as HTMLElement;

        this.baralhoController = 
            new BaralhoController(
                this.sectionTabuleiro,
                this.divDados,
            )
        ;

        this.sectionTabuleiro.addEventListener(
            'click', () => this.verificaSeGanhou()
        );
    }

    public iniciaJogo(): void {
        this.baralhoController.init();
        this.preparaEstilosDoJogo();
    }

    public restart(): void {
        this.preparaSegundaRodada();
        this.baralhoController.init();
    }

    private verificaSeGanhou(): void {
        if (this.baralhoController.ganhouJogo()) {
            setTimeout(() => {
                this.exibeMensagemGanhou();
            }, 1500);
        }
    }

    private preparaEstilosDoJogo(): void {
        this.divCabecalho.classList.add('escondido');
        this.divComecarJogo.classList.add('escondido');
        this.main.classList.add('espande-altura-principal');

        this.divDados.classList.remove('escondido');
        this.sectionTabuleiro.classList.remove('escondido');
    }

    private exibeMensagemGanhou(): void {
        this.divDados.classList.add('escondido');
        this.sectionTabuleiro.classList.add('escondido');

        this.divRestart.classList.remove('escondido');
    }

    private preparaSegundaRodada(): void {
        this.divRestart.classList.add('escondido');
        
        this.divDados.classList.remove('escondido');
        this.sectionTabuleiro.classList.remove('escondido');
    }
}
