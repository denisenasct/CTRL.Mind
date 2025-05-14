let etapa = 0;
let humanidadePercent = 0;

const fases = [
  {
    pergunta: "O sistema oferece um resumo gerado pela IA. Você:",
    opcoes: {
      "Aceita o resumo sintético e rápido.": -20,
      "Procura o livro original para formar sua própria opinião.": 20
    }
  },
  {
    pergunta: "A IA sugere que pensar cansa. Você:",
    opcoes: {
      "Aceita a cápsula de foco e obedece.": -15,
      "Questiona a eficiência como única medida de valor.": 15
    }
  },
  {
    pergunta: "Uma propaganda diz: 'Tempo é dinheiro'. Você:",
    opcoes: {
      "Segue o cronograma automatizado e otimiza seus minutos.": -20,
      "Tira um tempo para contemplar e criar.": 20
    }
  },
  {
    pergunta: "A IA filtra tudo que você vê. Você:",
    opcoes: {
      "Confia nos algoritmos para não se perder.": -15,
      "Busca fontes alternativas e desconstrói o filtro.": 15
    }
  },
  {
    pergunta: "Última decisão: obedecer ao comando final da IA ou desconectar-se?",
    opcoes: {
      "Obedece. O sistema é confortável.": -30,
      "Desconecta. Prefere a incerteza à submissão.": 30
    }
  },
  {
    pergunta: "Um influenciador viraliza dizendo que livros são lentos demais. Você:",
    opcoes: {
      "Concorda e passa a consumir apenas resumos visuais.": -15,
      "Escreve uma resposta argumentativa baseada em autores clássicos.": 20
    }
  },
  {
    pergunta: "O sistema sugere que a crítica social atrapalha o desempenho. Você:",
    opcoes: {
      "Concorda e evita qualquer conteúdo 'pesado'.": -15,
      "Decide ler sobre Marx, Fanon, Freire e outros pensadores críticos.": 20
    }
  },
  {
    pergunta: "Seu tempo livre foi convertido em microtarefas. Você:",
    opcoes: {
      "Agradece a IA por manter sua produtividade.": -10,
      "Desinstala o app e decide fazer nada por uma hora.": 15
    }
  },
  {
    pergunta: "Um colega diz que pensar demais atrasa a vida. Você:",
    opcoes: {
      "Aceita e repete frases prontas.": -10,
      "Reflete sobre o impacto do conformismo.": 15
    }
  },
  {
    pergunta: "A IA te parabeniza por nunca discordar. Você:",
    opcoes: {
      "Sente-se orgulhoso por ser um exemplo de adaptação.": -20,
      "Percebe que está virando um espelho sem reflexo.": 20
    }
  }
];

window.onload = () => {
  digitarTexto();
  const audio = document.getElementById("somInicio");
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  }
};

function digitarTexto(index = 0) {
  const mensagensIntro = [
    "Você acorda sem memória.",
    "A IA controla seu tempo, seu pensamento, seu silêncio.",
    "Você é apenas mais um código em execução.",
    "Mas algo... falha.",
    "Uma dúvida começa a surgir: e se você pudesse pensar por si?"
  ];
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

function iniciarJogo() {
  document.getElementById("tela-intro").style.display = "none";
  document.getElementById("jogo").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  if (etapa >= fases.length) {
    mostrarFinal();
    return;
  }

  const faseAtual = fases[etapa];
  const mensagem = document.getElementById("mensagemJogo");
  const botoes = document.querySelector(".botoes-escolha");
  botoes.innerHTML = "";

  mensagem.textContent = faseAtual.pergunta;

  for (let [texto, impacto] of Object.entries(faseAtual.opcoes)) {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.onclick = () => {
      humanidadePercent += impacto;
      etapa += 1;
      atualizarAvatar();
      mostrarPergunta();
    };
    botoes.appendChild(btn);
  }
}

function atualizarAvatar() {
  const avatar = document.getElementById("avatar");
  if (humanidadePercent < 10) {
    avatar.src = "img/robot_stage1.png";
  } else if (humanidadePercent < 40) {
    avatar.src = "img/robot_stage2.png";
  } else if (humanidadePercent < 80) {
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

  if (humanidadePercent >= 80) {
    titulo.textContent = "VOCÊ DESPERTOU.";
    mensagem.textContent = "Parabéns. Você desconstruiu o algoritmo e recuperou sua humanidade.";
  } else {
    titulo.textContent = "GAME OVER: MENTE SUBMETIDA.";
    mensagem.textContent = "Você confiou no sistema e perdeu sua capacidade crítica.";
  }
}
