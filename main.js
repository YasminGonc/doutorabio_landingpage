const aulaCard = document.querySelectorAll('.aulas-card'); //seleciona todas as tags com a classe aulas-card, que são os cards dentro do grid
const btnFechar = document.querySelectorAll('.btn-fechar'); //seleciona todas as tags com a classe btn-fechar, botão de fechar na explicação do conteúdo

for (let i = 0; i < aulaCard.length; i++) { //percorre a lista de classes
    const classe = aulaCard[i].classList[1];//pega a segunda classe do card (one, two,...)
    const idToggle = `#aulas-container-conteudo-${classe}`;//monta uma string com o mesmo nome do id do card do conteúdo

    aulaCard[i].onclick = function () {
        show(idToggle);
    }

    btnFechar[i].onclick = function () {
        show(idToggle);
    }

}

function show (idCard) {
    document.querySelector(idCard).classList.toggle('on');
}
