// ctrlmind.h
#ifndef CTRLMIND_H
#define CTRLMIND_H

#include <stdio.h>

// Estrutura para representar o jogador
typedef struct {
    char nome[50];
    int humanidade; // vai de 0 a 100
} Jogador;

// Estrutura de proposição com opções
typedef struct {
    char pergunta[256];
    char opcao1[128];
    char opcao2[128];
    int impacto1;
    int impacto2;
} Proposicao;

// Funções principais
void iniciarJogo(Jogador *jogador);
void exibirAvatar(const Jogador *jogador);
void aplicarProposicoes(Jogador *jogador, Proposicao *questoes, int total);
void avaliarResultado(const Jogador *jogador);

#endif
