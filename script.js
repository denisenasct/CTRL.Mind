let etapa = 0;
let nivelHumanidade = 0;
const mensagensIntro = [
  "Você acorda sem memória.",
  "A IA controla seu tempo, seu pensamento, seu silêncio.",
  "Você é apenas mais um código em execução.",
  "Mas algo... falha.",
  "Uma dúvida começa a surgir: e se você pudesse pensar por si?"
];

function digitarTexto(index = 0) {
  const p = document.getElementById("descricaoDigitada");
  if (index < mensagensIntro.length) {
    let i = 0;
    const intervalo = setInterval(() => {
      p.textContent += mensagensIntro[index][i];
      i++;
      if (i >= mensagensIntro[index].length) {
        clearInterval(intervalo);
        setTimeout(() => {
          p.textContent += "\n";
          digitarTexto(index + 1);
        }, 1000);
      }
    }, 50);
  }
}

window.onload = () => {
  digitarTexto();
  document.getElementById("somInicio").play();
};

function iniciarJogo() {
  document.getElementById("tela-intro").style.display = "none";
  document.getElementById("jogo").style.display = "block";
  atualizarEstado();
}

function escolha(decisao) {
  if (decisao === "questionar") {
    nivelHumanidade += 1;
  } else {
    nivelHumanidade -= 1;
  }

  etapa += 1;

  if (etapa === 1) {
    atualizarAvatar();
    document.getElementById("mensagemJogo").textContent = "A IA pergunta se você quer um resumo do livro ou ler o original.";
  } else if (etapa === 2) {
    atualizarAvatar();
    document.getElementById("mensagemJogo").textContent = "Você está cansado. A IA oferece uma cápsula de produtividade. Tomar ou recusar?";
  } else if (etapa === 3) {
    atualizarAvatar();
    mostrarFinal();
  }
}

function atualizarAvatar() {
  const avatar = document.getElementById("avatar");
  if (nivelHumanidade <= -1) {
    avatar.src = "img/robot_stage1.png";
  } else if (nivelHumanidade === 0) {
    avatar.src = "img/robot_stage2.png";
  } else if (nivelHumanidade === 1) {
    avatar.src = "img/robot_stage3.png";
  } else {
    avatar.src = "img/human_final.png";
  }
}

function mostrarFinal() {
  document.getElementById("jogo").style.display = "none";
  document.getElementById("final").style.display = "block";

  const titulo = document.getElementById("tituloFinal");
  const mensagem = document.getElementById("mensagemFinal");

  if (nivelHumanidade >= 2) {
    titulo.textContent = "VOCÊ DESPERTOU.";
    mensagem.textContent = "Parabéns. Você não é mais um robô. Você pensa.";
  } else {
    titulo.textContent = "GAME OVER: MENTE SUBMETIDA.";
    mensagem.textContent = "Você confiou demais no sistema. E deixou de existir como humano.";
  }
}
