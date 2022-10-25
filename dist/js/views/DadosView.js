export class DadosView {
    constructor(divDados) {
        this.divDados = divDados;
        this.divTimer = this.divDados.querySelector('.dados__timer');
        this.divProgresso = this.divDados.querySelector('.dados__progresso');
    }
    atualizaTimer(tempo) {
        this.divTimer.innerHTML = `
            <p>
                <span class="timer__horas-num">${tempo.hrs}</span>h :
                <span class="timer__minutos-num">${tempo.mins}</span>min :
                <span class="timer__segundos-num">${tempo.segs}</span>seg
            </p>
        `;
    }
    atualizaProgresso(progresso) {
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
//# sourceMappingURL=DadosView.js.map