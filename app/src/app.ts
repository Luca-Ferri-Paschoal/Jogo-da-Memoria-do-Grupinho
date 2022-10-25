import { JogoDaMemoria } from './JogoDaMemoria.js'; 

const botaoComecar: HTMLButtonElement = document.querySelector('.comecar-jogo__botao') as HTMLButtonElement;

const botaoRestart: HTMLButtonElement = document.querySelector('.restart__botao') as HTMLButtonElement;

const jogoDaMemoria = new JogoDaMemoria();
// jogoDaMemoria.iniciaJogo();

botaoComecar.addEventListener('click',
    (): void => {
        jogoDaMemoria.iniciaJogo();
    }
)

botaoRestart.addEventListener('click',
    (): void => {
        jogoDaMemoria.restart();
    }
);
