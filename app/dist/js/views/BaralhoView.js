export class BaralhoView {
    constructor(section, controller) {
        this.section = section;
        this.controller = controller;
    }
    init(baralho) {
        this.divs = [];
        this.section.innerHTML = '';
        baralho.forEach((carta, index) => {
            const div = document.createElement('div');
            div.classList.add('tabuleiro__card');
            div.addEventListener('click', e => {
                this.controller.clicouNaCarta(e);
            });
            div.dataset.index = index.toString();
            this.section.appendChild(div);
            this.divs.push(div);
        });
        this.varredura(baralho);
    }
    desviraCarta(index, carta) {
        this.divs[index].innerHTML = this.atualizaCarta(carta);
    }
    varredura(baralho) {
        this.divs.forEach((div, index) => {
            const carta = baralho[index];
            div.innerHTML = this.atualizaCarta(carta);
        });
    }
    atualizaCarta(carta) {
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
            `;
    }
}
//# sourceMappingURL=BaralhoView.js.map