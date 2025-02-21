// Exemplo 1: Abstração com Classe Abstrata e Herança

// Classe Abstrata
class Veiculo {
    constructor(modelo) {
        if (this.constructor === Veiculo) {
            throw new Error("Não é possível instanciar uma classe abstrata!");
        }
        this.modelo = modelo;
    }

    // Método abstrato (deve ser implementado pelas subclasses)
    detalhes() {
        throw new Error("Método 'detalhes' deve ser implementado!");
    }
}

// Subclasse que implementa a classe abstrata
class Carro extends Veiculo {
    constructor(modelo, cor) {
        super(modelo);
        this.cor = cor;
    }

    // Implementação do método abstrato
    detalhes() {
        console.log(`Carro Modelo: ${this.modelo}, Cor: ${this.cor}`);
    }
}

// Subclasse que implementa a classe abstrata
class Moto extends Veiculo {
    constructor(modelo, tipo) {
        super(modelo);
        this.tipo = tipo;
    }

    // Implementação do método abstrato
    detalhes() {
        console.log(`Moto Modelo: ${this.modelo}, Tipo: ${this.tipo}`);
    }
}

// Tentando instanciar a classe abstrata (vai gerar erro)
try {
    const veiculo = new Veiculo('Generic');
} catch (e) {
    console.log(e.message); // Não é possível instanciar uma classe abstrata!
}

// Instanciando objetos das subclasses
const carro1 = new Carro('Fusca', 'Azul');
const moto1 = new Moto('CB500', 'Esportiva');

carro1.detalhes(); // Carro Modelo: Fusca, Cor: Azul
moto1.detalhes();  // Moto Modelo: CB500, Tipo: Esportiva

// Exemplo 2: Encapsulamento e Abstração de Atributos

class ContaBancaria {
    constructor(cliente, saldo) {
        this.cliente = cliente;
        this._saldo = saldo; // Propriedade encapsulada
    }

    // Método público para realizar um saque
    sacar(valor) {
        if (valor > this._saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado! Saldo atual: R$${this._saldo}`);
        }
    }

    // Método público para consultar saldo
    consultarSaldo() {
        console.log(`Saldo de ${this.cliente}: R$${this._saldo}`);
    }

    // Método protegido para modificar o saldo (não acessível diretamente)
    _modificarSaldo(valor) {
        this._saldo += valor;
    }
}

// Instanciando uma conta
const contaJoao = new ContaBancaria('João', 1000);

// Usando os métodos públicos para interagir com a conta
contaJoao.consultarSaldo();  // Saldo de João: R$1000
contaJoao.sacar(200);         // Saque de R$200 realizado! Saldo atual: R$800
contaJoao.sacar(1000);        // Saldo insuficiente!

// Exemplo 3: Abstração de Pagamento com Interface Comum

// Classe abstrata
class MetodoPagamento {
    pagar(valor) {
        throw new Error("Método 'pagar' deve ser implementado!");
    }
}

// Subclasse para pagamento com Cartão de Crédito
class CartaoCredito extends MetodoPagamento {
    pagar(valor) {
        console.log(`Pagando R$${valor} com Cartão de Crédito.`);
    }
}

// Subclasse para pagamento com PayPal
class PayPal extends MetodoPagamento {
    pagar(valor) {
        console.log(`Pagando R$${valor} com PayPal.`);
    }
}

// Função para processar o pagamento
function processarPagamento(metodo, valor) {
    metodo.pagar(valor);
}

// Usando a abstração para pagar de diferentes formas
const cartao = new CartaoCredito();
const paypal = new PayPal();

processarPagamento(cartao, 150);  // Pagando R$150 com Cartão de Crédito.
processarPagamento(paypal, 250);  // Pagando R$250 com PayPal.

// Exemplo 4: Abstração com Classe de Forma Geométrica

class Forma {
    calcularArea() {
        throw new Error("Método 'calcularArea' deve ser implementado!");
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

// Usando a abstração
const circulo = new Circulo(5);
const retangulo = new Retangulo(4, 6);

console.log(`Área do círculo: ${circulo.calcularArea()}`); // Área do círculo: 78.53981633974483
console.log(`Área do retângulo: ${retangulo.calcularArea()}`); // Área do retângulo: 24
