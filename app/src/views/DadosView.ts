import { interfaceTempo as Tempo } from '../interfaces/interefaceTempo.js';
import { interfaceProgresso as Progresso } from '../interfaces/interfaceProgresso.js';

export class DadosView {
    private divTimer: HTMLElement;
    private divProgresso: HTMLElement;

    constructor(
        private divDados: HTMLElement,
    ) {
        this.divTimer = this.divDados.querySelector('.dados__timer') as HTMLElement;

        this.divProgresso = this.divDados.querySelector('.dados__progresso') as HTMLElement;
    }

    public atualizaTimer(tempo: Tempo): void {
        this.divTimer.innerHTML = `
            <p>
                <span class="timer__horas-num">${tempo.hrs}</span>h :
                <span class="timer__minutos-num">${tempo.mins}</span>min :
                <span class="timer__segundos-num">${tempo.segs}</span>seg
            </p>
        `;
    }

    public atualizaProgresso(progresso: Progresso): void {
        this.divProgresso.innerHTML = `
            <p class="progresso__encontrados">
                Encontrados: <span class="encontrados-num">${progresso.encontrados}</span>
            </p>
            <p class="progresso__restantes">
                Restantes: <span class="restantes-num">${progresso.restante}</span>
            </p>
        `;
    }
}
