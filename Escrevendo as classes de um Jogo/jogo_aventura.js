const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'atacou com magia';
                break;
            case 'guerreiro':
                ataque = 'atacou com a espada';
                break;
            case 'monge':
                ataque = 'atacou com artes marciais';
                break;
            case 'ninja':
                ataque = 'atacou com a shuriken';
                break;
            default:
                ataque = 'atacou';
        }

        console.log(`O ${this.tipo} ${this.nome} ${ataque}`);
    }
}

rl.question("Qual o nome do seu Herói? ", function(nomeHeroi) {
    rl.question("Qual a idade do seu Herói? ", function(idadeHeroi) {
        rl.question("Qual o tipo do seu Herói? ", function(tipoHeroi) {
            const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
            heroi.atacar();
            rl.close();
        });
    });
});

