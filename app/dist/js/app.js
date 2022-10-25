import { JogoDaMemoria } from './JogoDaMemoria.js';
const botaoComecar = document.querySelector('.comecar-jogo__botao');
const botaoRestart = document.querySelector('.restart__botao');
const jogoDaMemoria = new JogoDaMemoria();
botaoComecar.addEventListener('click', () => {
    jogoDaMemoria.iniciaJogo();
});
botaoRestart.addEventListener('click', () => {
    jogoDaMemoria.restart();
});
//# sourceMappingURL=app.js.map