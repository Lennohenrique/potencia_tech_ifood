let nome = "Heleno";
let xpPersonagem = 2000
let faltaxp = 0;

switch (true){
    case xpPersonagem <= 1000:
        faltaxp = 1001 - xpPersonagem;
        console.log("O heroi " + nome + " está no nível Ferro e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem > 1000 && xpPersonagem <= 2000:
        faltaxp = 2001 - xpPersonagem;
        console.log("O heroi " + nome + " está no nível Bronze e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem > 2000 && xpPersonagem <= 5000:
        faltaxp = 5001 - xpPersonagem;
        console.log("O heroi " + nome + " está no nível Prata e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem > 5000 && xpPersonagem <= 7000:
        faltaxp = 7001 - xpPersonagem;
        console.log("O heroi " + nome + " está no nível Ouro e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem > 7000 && xpPersonagem <= 8000:
        faltaxp = 8001 - xpPersonagem;
        console.log("O heroi " + nome + " está no nível Platina e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem > 8000 && xpPersonagem <= 9000:
        faltaxp = 9001 - xpPersonagem;
        console.log("O heroi " + nome + " está no nível Ascendente e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem > 9000 && xpPersonagem <= 10000:
        faltaxp = 10001 - xpPersonagem
        console.log("O heroi " + nome + " está no nível Imortal e faltam " + faltaxp + " de experiência para o proximo nível");
        break;
    case xpPersonagem >= 10001:
        console.log("O heroi " + nome + " está no nível Radiante!! Parabéns por alcançar o nível máximo!");
        break;
    
}
/* ## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */