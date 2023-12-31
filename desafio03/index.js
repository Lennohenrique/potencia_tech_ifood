/* # 3️⃣ Escrevendo as classes de um Jogo
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos
## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/

class Heroi{
    constructor(nome, idade, tipoHeroi){
        this.nome = nome;
        this.idade = idade;
        this.tipoHeroi = tipoHeroi;
    }

    atacar(){
        if(this.tipoHeroi === "Mago"){
            console.log(`O ${this.tipoHeroi} atacou usando Magia`)
        } else if(this.tipoHeroi === "Guerreiro"){
            console.log(`O ${this.tipoHeroi} atacou usando uma Espada`)
        } else if(this.tipoHeroi === "Monge"){
            console.log(`O ${this.tipoHeroi} atacou usando Artes Marciais`)
        } else{
            console.log(`O ${this.tipoHeroi} atacou usando uma Shuriken`)
        }
    }
}

let heleno = new Heroi("heleno", 27, "Mago");
heleno.atacar()
let lenno = new Heroi("lenno", 18, "Ninja");
lenno.atacar()
let henrique = new Heroi("Henrique", 45, "Guerreiro");
henrique.atacar()