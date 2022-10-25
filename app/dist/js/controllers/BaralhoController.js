import { Baralho } from '../models/Baralho.js';
import { Relogio } from '../models/Relogio.js';
import { BaralhoView } from '../views/BaralhoView.js';
import { DadosView } from '../views/DadosView.js';
export class BaralhoController {
    constructor(sectionTabuleiro, divDados) {
        this.sectionTabuleiro = sectionTabuleiro;
        this.divDados = divDados;
        this.proximaRodada = true;
        this.audioDesvira = new Audio('./audio/som_vira_carta.wav');
        this.audioAchou = new Audio('./audio/som_encontrou.wav');
        this.audioErrou = new Audio('./audio/som_errou.wav');
        this.audioGanhou = new Audio('./audio/som_ganhou.mp3');
        this.baralho = new Baralho();
        this.baralhoView = new BaralhoView(this.sectionTabuleiro, this);
        this.relogio = new Relogio();
        this.dadosView = new DadosView(this.divDados);
    }
    init() {
        this.baralho.init();
        this.baralhoView.init(this.baralho.lista);
        this.relogio.init();
        this.timerStart();
        this.dadosView.atualizaProgresso(this.baralho.progresso);
    }
    clicouNaCarta(e) {
        if (this.proximaRodada) {
            this.audioDesvira.play();
            this.desviraCarta(e);
            if (this.baralho.virouDuasCartas()) {
                this.proximaRodada = false;
                this.verificaSeEhPar();
            }
        }
    }
    ganhouJogo() {
        if (this.baralho.jogoCompleto()) {
            this.relogio.stop();
            clearInterval(this.interval);
            this.audioGanhou.play();
            return true;
        }
        return false;
    }
    desviraCarta(e) {
        const element = e.target;
        const divCarta = element.closest('.tabuleiro__card');
        const index = parseInt(divCarta.dataset.index);
        this.baralhoView.desviraCarta(index, this.baralho.desviraCarta(index));
    }
    verificaSeEhPar() {
        const timer = setTimeout(() => {
            this.baralhoView.varredura(this.baralho.lista);
            this.proximaRodada = true;
        }, 1750);
        if (this.baralho.saoPares()) {
            this.audioAchou.play();
            clearTimeout(timer);
            this.dadosView.atualizaProgresso(this.baralho.progresso);
            this.proximaRodada = true;
        }
        else {
            this.audioErrou.play();
        }
    }
    timerStart() {
        this.interval = setInterval(() => this.dadosView
            .atualizaTimer(this.relogio.tempo));
    }
}
//# sourceMappingURL=BaralhoController.js.map