/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
## Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
## Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

let nome = "Heleno";
let vitoria = 300;
let derrota = 265;

function calcularRank(win, lose){
    let saldo = win - lose;
    return saldo;
}

function exibirRank(saldo){
    switch (true){
        case saldo <= 10:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Ferro.`);
            break;
        case saldo > 10 && saldo <= 20:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Bronze.`);
            break;
        case saldo > 20 && saldo <= 50:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Prata.`);
            break;
        case saldo > 50 && saldo <= 80:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Ouro.`);
            break;
        case saldo > 80 && saldo <= 90:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Diamente.`);
            break;
        case saldo > 90 && saldo <= 100:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Lendário.`);
            break;
        case saldo > 100:
            console.log(`O heroi ${nome} tem saldo de ${saldo} vitórias e está no rank Imortal. Parabéns!!`);
            break;
    }
}

let rank = calcularRank(vitoria, derrota);
exibirRank(rank);