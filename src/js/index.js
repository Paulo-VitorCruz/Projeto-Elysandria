const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");


botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    
    desativarBotaoSelecionado();

    
    marcarBotaoSelecionado(botao);

   
    esconderImagemAtiva();

    
    mostrarImagemDeFundo(indice);

   
    esconderInformacoesAtivas();

   
    mostrarInformacoes(indice);
  });
});

function marcarBotaoSelecionado(botao) {
  botao.classList.add("botao-selecionado");
}

function mostrarInformacoes(indice) {
  if (informacoes[indice]) {
    informacoes[indice].classList.add("ativa");
  }
}

function esconderInformacoesAtivas() {
  const informacaoAtiva = document.querySelector(".informacoes.ativa");
  if (informacaoAtiva) {
    informacaoAtiva.classList.remove("ativa");
  }
}

function mostrarImagemDeFundo(indice) {
  if (imagens[indice]) {
    imagens[indice].classList.add("ativa");
  }
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".imagem.ativa");
  if (imagemAtiva) {
    imagemAtiva.classList.remove("ativa");
  }
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.botao-selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("botao-selecionado");
  }
}
