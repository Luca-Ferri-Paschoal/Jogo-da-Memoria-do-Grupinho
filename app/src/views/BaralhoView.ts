import { Carta } from '../models/Carta.js';
import { BaralhoController } from '../controllers/BaralhoController.js';

export class BaralhoView {
    private divs: Array<HTMLElement>;

    constructor(
        private section: HTMLElement,
        private controller: BaralhoController,
    ) {
    }
    
    public init(baralho: Array<Carta>): void {
        this.divs = [];
        this.section.innerHTML = '';
        
        baralho.forEach((carta, index) => {
            const div: HTMLElement = document.createElement('div');

            div.classList.add('tabuleiro__card');
            div.addEventListener('click', e => {
                this.controller.clicouNaCarta(e)
            });
            
            div.dataset.index = index.toString();

            this.section.appendChild(div);
            this.divs.push(div);
        });

        this.varredura(baralho);
    }

    public desviraCarta(
        index: number,
        carta: Carta
    ): void {
        this.divs[index].innerHTML = this.atualizaCarta(carta);
    }

    public varredura(baralho: Array<Carta>): void {
        this.divs.forEach((div, index) => {
            const carta = baralho[index];

            div.innerHTML = this.atualizaCarta(carta);
        });
    }

    private atualizaCarta(carta: Carta): string {
        return carta.virada ? 
            `
                <img class="card__imagem" src="./img/${carta.image}" alt="${carta.alt}">
                <div class="card__descricao">
                    <p class="card__descricao--paragrafo">${carta.descricao}</p>
                </div>
            `
            :
            `
                <img class="card__imagem-traseira" src="./img/traseira-da-carta.png">
            `
        ;
    }
}
