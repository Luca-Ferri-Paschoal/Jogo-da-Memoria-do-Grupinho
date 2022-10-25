import { Baralho } from '../models/Baralho.js';
import { Relogio } from '../models/Relogio.js';
import { BaralhoView } from '../views/BaralhoView.js';
import { DadosView } from '../views/DadosView.js';

export class BaralhoController {
    private baralho: Baralho;
    private baralhoView: BaralhoView;
    private relogio: Relogio;
    private dadosView: DadosView;

    private proximaRodada: boolean = true;
    private interval: NodeJS.Timer;
    
    private audioDesvira: HTMLAudioElement = new Audio('./audio/som_vira_carta.wav');
    private audioAchou: HTMLAudioElement = new Audio('./audio/som_encontrou.wav');
    private audioErrou: HTMLAudioElement = new Audio('./audio/som_errou.wav');
    private audioGanhou: HTMLAudioElement = new Audio('./audio/som_ganhou.mp3');
    
    constructor(
        private sectionTabuleiro: HTMLElement,
        private divDados: HTMLElement,
    ) {
        this.baralho = new Baralho();
        this.baralhoView = new BaralhoView(
            this.sectionTabuleiro,
            this
        );

        this.relogio = new Relogio();
        this.dadosView = new DadosView(
            this.divDados
        );
    }

    public init() {
        this.baralho.init();
        this.baralhoView.init(
            this.baralho.lista
        );

        this.relogio.init();
        this.timerStart();
        this.dadosView.atualizaProgresso(
            this.baralho.progresso
        );
    }

    public clicouNaCarta(e: MouseEvent): void {
        if (this.proximaRodada) {
            this.audioDesvira.play();
            this.desviraCarta(e);

            if (this.baralho.virouDuasCartas()) {
                this.proximaRodada = false;
                this.verificaSeEhPar();
            }
        }
    }

    public ganhouJogo(): boolean {
        if (this.baralho.jogoCompleto()) {
            this.relogio.stop();
            clearInterval(this.interval);

            this.audioGanhou.play();

            return true;
        }
        
        return false;
    }

    private desviraCarta(e: MouseEvent) {
        const element = e.target as HTMLElement;

        const divCarta = element.closest(
            '.tabuleiro__card'
        ) as HTMLElement;
        
        const index = parseInt(
            divCarta.dataset.index as string
        );

        this.baralhoView.desviraCarta(
            index, this.baralho.desviraCarta(index)
        );
    }

    private verificaSeEhPar() {
        const timer = setTimeout(() => {
            this.baralhoView.varredura(
                this.baralho.lista
            );
            this.proximaRodada = true;
        }, 1750);

        if (this.baralho.saoPares()) {
            this.audioAchou.play();

            clearTimeout(timer);

            this.dadosView.atualizaProgresso(
                this.baralho.progresso
            );

            this.proximaRodada = true;
        } else {
            this.audioErrou.play();
        }
    }

    private timerStart(): void {
        this.interval = setInterval(() => 
            this.dadosView
                .atualizaTimer(
                    this.relogio.tempo
                )
            ,
        )
    }
}
