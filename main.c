// main.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ctrlmind.h"

#define TOTAL_QUESTOES 10

int main() {
    Jogador jogador;

    printf("Bem-vindo ao CTRL.Mind\nDigite seu nome: ");
    fgets(jogador.nome, sizeof(jogador.nome), stdin);
    jogador.nome[strcspn(jogador.nome, "\n")] = '\0';
    jogador.humanidade = 0;

    Proposicao questoes[TOTAL_QUESTOES] = {
        {"A IA oferece um resumo. Você:", "Aceita o resumo sintético.", "Lê o original.", -10, 10},
        {"Pensar cansa, diz a IA. Você:", "Obedece e toma a cápsula.", "Questiona o sistema.", -10, 10},
        {"Tempo é dinheiro. Você:", "Segue o cronograma.", "Contempla e cria.", -10, 10},
        {"IA filtra tudo que você vê. Você:", "Confia nela.", "Busca outras fontes.", -10, 10},
        {"Obedecer ao comando final?", "Obedece.", "Desconecta.", -10, 10},
        {"Influenciador diz que livros são lentos. Você:", "Concorda.", "Refuta com autores clássicos.", -10, 10},
        {"Crítica social atrasa. Você:", "Evita o tema.", "Lê autores críticos.", -10, 10},
        {"Tempo livre virou microtarefas. Você:", "Agradece à IA.", "Faz nada por 1h.", -10, 10},
        {"Pensar atrasa a vida. Você:", "Repete clichê.", "Reflete sozinho.", -10, 10},
        {"IA te parabeniza por nunca discordar. Você:", "Orgulha-se.", "Se assusta.", -10, 10}
    };

    iniciarJogo(&jogador);
    aplicarProposicoes(&jogador, questoes, TOTAL_QUESTOES);
    avaliarResultado(&jogador);

    return 0;
}
