// Classe base Carro
class Carro {
    constructor(nome, portas, cor) {
        this.nome = nome;
        this.portas = portas;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.nome} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        this.velocidade = 0;
        console.log(`${this.nome} está desligado.`);
    }

    acelerar(quantidade) {
        if (this.ligado) {
            this.velocidade += quantidade;
            console.log(`${this.nome} acelerou para ${this.velocidade} km/h.`);
        } else {
            console.log(`${this.nome} está desligado. Não é possível acelerar.`);
        }
    }
}

// Classe Militar que estende Carro
class Militar extends Carro {
    constructor(nome, portas, cor, municao, blindagem) {
        super(nome, portas, cor);
        this.municao = municao;
        this.blindagem = blindagem;
    }

    atirar() {
        if (this.municao > 0) {
            this.municao--;
            console.log(`${this.nome} atirou! Munição restante: ${this.municao}.`);
        } else {
            console.log(`${this.nome} está sem munição!`);
        }
    }

    sofrerDano() {
        if (this.blindagem > 0) {
            this.blindagem--;
            console.log(`${this.nome} sofreu dano! Blindagem restante: ${this.blindagem}.`);
        } else {
            console.log(`${this.nome} já está destruído!`);
        }
    }
}

// Exemplo de uso
const carroComum = new Carro('Fusca', 2, 'Azul');
carroComum.ligar();
carroComum.acelerar(30);
carroComum.desligar();

console.log('---');

const tanque = new Militar('Tanque de Guerra', 4, 'Verde', 5, 100);
tanque.ligar();
tanque.acelerar(10);
tanque.atirar();
tanque.atirar();
tanque.sofrerDano();
tanque.desligar();
