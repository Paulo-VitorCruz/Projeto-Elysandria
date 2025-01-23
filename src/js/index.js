const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Passo 2 - Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Passo 3 - Desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    // Passo 4 - Marcar o botão clicado como selecionado
    marcarBotaoSelecionado(botao);

    // Passo 5 - Esconder a imagem anteriormente ativa
    esconderImagemAtiva();

    // Passo 6 - Mostrar a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice);

    // Passo 7 - Esconder a informação anteriormente ativa
    esconderInformacoesAtivas();

    // Passo 8 - Mostrar a informação correspondente ao botão clicado
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
