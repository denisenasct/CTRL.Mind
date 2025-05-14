// ctrlmind.c
#include "ctrlmind.h"
#include <stdlib.h>
#include <string.h>

void iniciarJogo(Jogador *jogador) {
    printf("\nBem-vindo(a), %s. Prepare-se para questionar o sistema.\n", jogador->nome);
    printf("Cada escolha afetará sua humanidade.\n\n");
}

void exibirAvatar(const Jogador *jogador) {
    if (jogador->humanidade >= 80) {
        printf("[AVATAR: HUMANO COMPLETO]\n");
    } else if (jogador->humanidade >= 50) {
        printf("[AVATAR: MISTO - ROBÔ/HUMANO]\n");
    } else {
        printf("[AVATAR: ROBÔ]\n");
    }
}

void aplicarProposicoes(Jogador *jogador, Proposicao *questoes, int total) {
    int escolha;
    for (int i = 0; i < total; i++) {
        exibirAvatar(jogador);
        printf("\n%d. %s\n", i + 1, questoes[i].pergunta);
        printf("1 - %s\n", questoes[i].opcao1);
        printf("2 - %s\n", questoes[i].opcao2);
        printf("Escolha (1 ou 2): ");
        scanf("%d", &escolha);

        if (escolha == 1) {
            jogador->humanidade += questoes[i].impacto1;
        } else if (escolha == 2) {
            jogador->humanidade += questoes[i].impacto2;
        } else {
            printf("Opção inválida. Nenhum impacto registrado.\n");
        }

        if (jogador->humanidade > 100) jogador->humanidade = 100;
        if (jogador->humanidade < 0) jogador->humanidade = 0;
    }
}

void avaliarResultado(const Jogador *jogador) {
    printf("\nResultado Final:\n");
    exibirAvatar(jogador);
    printf("Humanidade: %d%%\n", jogador->humanidade);

    if (jogador->humanidade >= 80) {
        printf("VOCÊ DESPERTOU. Você recuperou sua capacidade crítica.\n");
    } else {
        printf("MENTE SUBMETIDA. Você foi programado pelo sistema.\n");
    }
}
