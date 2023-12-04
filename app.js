let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;
function exbirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exbirMensagemInicial() {
  exbirTextoNaTela("h1", "jogo do número secreto");
  exbirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}
exbirMensagemInicial();
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exbirTextoNaTela("h1", "ACERTOU");
    let palavratentativas = tentativas > 1 ? "Tentativas" : "tentativa";
    let mensagemtentativas = `Parabéns,você descobriu o número secreto com ${tentativas} ${palavratentativas}!`;
    exbirTextoNaTela("p", mensagemtentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exbirTextoNaTela("p", "O número secreto é menor");
    } else {
      exbirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}
function gerarNumeroAletorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAletorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAletorio();
  limparCampo();
  tentativas = 1;
  exbirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
