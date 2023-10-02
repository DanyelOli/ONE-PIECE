const bnt = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

bnt.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add('selecionado');
    personagens[index].classList.add('selecionado');
  });
});

function desselecionarPersonagem() {
  const personagemSelector = document.querySelector('.personagem.selecionado');
  personagemSelector.classList.remove('selecionado');
}

function desselecionarBotao() {
  const btnSelector = document.querySelector('.botao.selecionado');
  btnSelector.classList.remove('selecionado');
}
